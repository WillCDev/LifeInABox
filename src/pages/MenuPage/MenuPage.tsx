import React, { FC, useState, useEffect, useRef } from 'react'
import type { RouteComponentProps } from '@reach/router'
import PageWrapper from 'core/components/PageWrapper'
import MusicPlayer from './components/MusicPlayer'
import config from './MenuPage.config'
import styles from './MenuPage.module.less'
import BoxHouse from 'core/components/BoxHouse/BoxHouse'

const cellCount = config.length
const theta = 360 / cellCount
const radius = Math.round(
  Number(styles.cellWidth.replace('px', '')) /
    2 /
    Math.tan(Math.PI / cellCount),
)

const GamelanPage: FC<RouteComponentProps> = () => {
  const previousSelected = useRef(0)
  const [selected, setSelected] = useState(0)
  const [angle, setAngle] = useState(0)

  // When selected cell changes, update the scene rotation
  useEffect(() => {
    const { current } = previousSelected
    if (selected === current) return
    if (current === config.length - 1 && selected === 0) setAngle(angle - theta)
    else if (selected === config.length - 1 && current === 0)
      setAngle(angle + theta)
    else {
      const diff = current - selected
      setAngle(angle + diff * theta)
    }
    previousSelected.current = selected
  }, [selected])

  // Listen to left and right arrows to select the cells
  useEffect(() => {
    const handleKeyPress = ({ key }: KeyboardEvent): void => {
      if (key === 'ArrowRight') setSelected((sel) => (sel + 1) % 6)
      else if (key === 'ArrowLeft')
        setSelected((sel) => ((sel === 0 ? config.length : sel) - 1) % 6)
    }
    document.body.addEventListener('keydown', handleKeyPress)
    return () => {
      document.body.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <PageWrapper backgroundImage="url('/images/background/abstract1.jpg')">
      <div className={styles.scene}>
        <div
          className={styles.carousel}
          style={{
            transform: `rotateY(${angle}deg)`,
          }}
        >
          {config.map(({ image, title }, index) => (
            <button
              tabIndex={0}
              className={styles.carousel__cell}
              style={{
                transform: `rotateY(${
                  theta * index
                }deg) translateZ(${radius}px)`,
              }}
              key={index}
              onFocus={() => setSelected(index)}
            >
              <BoxHouse
                open={index === selected}
                image={image}
                text={title.toUpperCase()}
              />
            </button>
          ))}
        </div>
      </div>

      {/* <MusicPlayer /> */}
    </PageWrapper>
  )
}

export default GamelanPage
