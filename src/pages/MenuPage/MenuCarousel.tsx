import { FC, useState, useEffect, useRef, useContext } from 'react'
import VanillaSwipe from 'vanilla-swipe'
import { joinClassNames } from 'utils'
import BoxHouse from './BoxHouse'
import {
  getConfig,
  zoomInDuration,
  menuItemCount,
  radius,
  theta,
  swipeSpeedMultiplier,
  MenuItem,
} from './menu.config'
import styles from './styles/index.less'
import PageContext from 'common/components/PageContext'

const menuConfig = getConfig()
const carouselId = 'Menu-Carousel'

const MenuCarousel: FC = () => {
  const { navigate, navigating } = useContext(PageContext)
  const previousSelected = useRef(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [selected, setSelected] = useState(0)
  const [angle, setAngle] = useState(450)
  const deltaRef = useRef(0)
  const [swipeState, setSwipeState] = useState<'swiping' | 'swiped' | 'none'>(
    'none'
  )

  // Apply the initial animation unless user has reducedAnimation enabled
  useEffect(() => {
    const spin = setTimeout(() => setAngle(0), 10)
    const animate = setTimeout(() => setIsAnimating(false), zoomInDuration)
    return () => {
      clearTimeout(spin)
      clearTimeout(animate)
    }
  }, [])

  // Apply animation when navigating away also
  useEffect(() => {
    if (navigating) setAngle((angle) => angle + 360)
  }, [navigating])

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
    if (isAnimating) return

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
  }, [isAnimating])

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

  const clickHandler = ({ id, path }: Pick<MenuItem, 'id' | 'path'>): void => {
    if (swipeState === 'none' && !isAnimating) {
      id === selected ? navigate(path) : setSelected(id)
    }
  }

  return (
    <nav
      tabIndex={1}
      className={joinClassNames([
        styles.scene,
        isAnimating && styles.isAnimating,
        swipeState === 'swiping' && styles.isSwiping,
        navigating && styles.isNavigating,
      ])}
      id={carouselId}
    >
      <div
        className={styles.carousel}
        style={{
          transform: `rotateY(${angle}deg)`,
        }}
      >
        {menuConfig.map(({ menu, text, angle, id, path }) => (
          <div
            tabIndex={-1}
            className={styles.carousel__cell}
            style={{
              transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
            }}
            key={id}
            onClick={() => clickHandler({ id, path })}
          >
            <BoxHouse
              selected={id === selected && !navigating}
              coinImage={menu.coinImage}
              faceImage={menu.boxImage}
              text={text.toUpperCase()}
              textColor={menu.color}
            />
          </div>
        ))}
      </div>
    </nav>
  )
}

export default MenuCarousel
