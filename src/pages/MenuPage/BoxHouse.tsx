import { usePrefersReducedMotion } from '@chakra-ui/react'
import { ComponentProps, FC } from 'react'
import { joinClassNames } from 'utils'
import styles from './styles/index.less'

interface Props extends ComponentProps<'div'> {
  selected: boolean
  coinImage: string
  faceImage: string
  text: string
  textColor: string
}

const BoxHouse: FC<Props> = ({
  selected,
  coinImage,
  faceImage,
  text,
  textColor,
  ...rest
}) => {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div
      className={joinClassNames([
        styles.boxWrapper,
        reducedMotion && styles.reducedMotion,
        selected && styles.selected,
      ])}
    >
      <div
        className={joinClassNames([styles.box, selected && styles.open])}
        {...rest}
      >
        <div className={joinClassNames([styles.side, styles.right])}>
          <div
            className={`${styles.side} ${styles.flap} ${styles.roofFlap}`}
          ></div>
        </div>
        <div className={joinClassNames([styles.side, styles.back])}>
          <div className={joinClassNames([styles.flap, styles.topFlap])}></div>
        </div>
        <div className={joinClassNames([styles.side, styles.bottom])}></div>
        <div className={joinClassNames([styles.side, styles.left])}>
          <div
            className={joinClassNames([
              styles.side,
              styles.flap,
              styles.roofFlap,
            ])}
          ></div>
        </div>
        <div
          className={joinClassNames([styles.side, styles.front])}
          style={{
            backgroundImage: `url(/assets/${faceImage})`,
            // backgroundImage: `url(/assets/menu/houses-Front.svg`,
          }}
        >
          <div className={joinClassNames([styles.flap, styles.topFlap])}></div>
        </div>
        <button
          tabIndex={selected ? 1 : -1}
          className={styles.coin}
          style={{ borderColor: textColor }}
          aria-label={`Go to the  ${text} page`}
        >
          <div
            className={styles.inner}
            style={{ backgroundImage: `url(/assets/${coinImage})` }}
          />
          <span className={styles.text}>{text.toUpperCase()}</span>
        </button>
      </div>
    </div>
  )
}
export default BoxHouse
