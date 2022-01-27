import { FC, useState, useEffect, useRef, useLayoutEffect } from 'react'
import VanillaSwipe from 'vanilla-swipe'
import joinClassNames from 'common/utils/joinClassNames'
import BoxHouse from './BoxHouse'
import {
  getConfig,
  zoomInDuration,
  menuItemCount,
  radius,
  theta,
  swipeSpeedMultiplier,
} from './menu.config'
import styles from './styles/index.less'

const menuConfig = getConfig()
const carouselId = 'Menu-Carousel'

const MenuCarousel: FC = () => {
  const previousSelected = useRef(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [selected, setSelected] = useState(0)
  const [angle, setAngle] = useState(450)
  const deltaRef = useRef(0)
  const [swipeState, setSwipeState] = useState<'swiping' | 'swiped' | 'none'>(
    'none'
  )

  // Apply the initial animation unless user has reducedAnimation enabled
  useLayoutEffect(() => {
    const spin = setTimeout(() => setAngle(0), 1)
    const animate = setTimeout(() => setIsAnimating(false), zoomInDuration)
    return () => {
      clearTimeout(spin)
      clearTimeout(animate)
    }
  }, [])

  // When selected cell changes, update the scene rotation
  useEffect(() => {
    const current = previousSelected.current
    previousSelected.current = selected
    if (isAnimating || swipeState !== 'none') return

    if (selected === current) return
    if (current === menuItemCount - 1 && selected === 0)
      setAngle((ang) => ang - theta)
    else if (selected === menuItemCount - 1 && current === 0)
      setAngle((ang) => ang + theta)
    else {
      const diff = current - selected
      setAngle((ang) => ang + diff * theta)
    }
  }, [selected])

  // Listen to left and right arrows to select the cells
  useEffect(() => {
    const handleKeyPress = ({ key }: KeyboardEvent): void => {
      if (key === 'ArrowRight')
        setSelected((sel) => (sel + 1) % menuConfig.length)
      else if (key === 'ArrowLeft')
        setSelected(
          (sel) => ((sel === 0 ? menuItemCount : sel) - 1) % menuConfig.length
        )
    }
    document.body.addEventListener('keydown', handleKeyPress)
    return () => {
      document.body.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  console.log('Selected', selected, angle)
  // Listen to swipes and rotate

  useEffect(() => {
    const VS = new VanillaSwipe({
      element: document.body,
      delta: 20,
      onSwipeStart: () => setSwipeState('swiping'),
      onSwiping: (_e, { deltaX }) => {
        const diff = deltaX - deltaRef.current
        deltaRef.current = deltaX
        setAngle((angle) => angle + diff / swipeSpeedMultiplier)
      },
      onSwiped: (_e, { directionX, velocity }) => {
        deltaRef.current = 0
        // Small hack to allow any clicks to be be
        // flushed/skipped before cancelling the swipe state
        setSwipeState('swiped')
        const timer = setTimeout(() => {
          setSwipeState('none')
          clearTimeout(timer)
        }, 100)

        setAngle((angle) => {
          const velocityAdjustment = velocity * 0.75 * theta
          const adjustedAngle =
            directionX === 'LEFT'
              ? angle - velocityAdjustment
              : angle + velocityAdjustment
          const finalAngle = Math.round(adjustedAngle / theta) * theta

          const selectedItem = menuConfig.find(({ angle: a }) => {
            return Math.abs(((finalAngle % 360) - 360) % 360) === a
          })
          setSelected(selectedItem?.id || 0)

          return finalAngle
        })
      },
      mouseTrackingEnabled: true,
      touchTrackingEnabled: true,
      preventDefaultTouchmoveEvent: true,
      preventTrackingOnMouseleave: true,
    })
    VS.init()
    return () => VS.destroy()
  }, [])

  const clickHandler = (id: number): void => {
    if (swipeState === 'none' && !isAnimating) {
      setSelected(id)
    }
  }

  return (
    <nav
      tabIndex={1}
      className={joinClassNames([
        styles.scene,
        isAnimating && styles.isAnimating,
        swipeState === 'swiping' && styles.isSwiping,
      ])}
      id={carouselId}
    >
      <div
        className={styles.carousel}
        style={{
          transform: `rotateY(${angle}deg)`,
        }}
      >
        {menuConfig.map(({ image, title, angle, id }) => (
          <div
            tabIndex={-1}
            className={styles.carousel__cell}
            style={{
              transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
            }}
            key={id}
            onClick={() => clickHandler(id)}
          >
            <BoxHouse
              selected={id === selected}
              image={image}
              text={title.toUpperCase()}
            />
          </div>
        ))}
      </div>
    </nav>
  )
}

export default MenuCarousel
