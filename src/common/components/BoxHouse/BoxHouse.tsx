import joinClassNames from 'common/utils/joinClassNames'
import { ComponentProps, FC } from 'react'
import styles from './BoxHouse.less'

export enum Position {
  Before = 'isBefore',
  Center = 'isCenter',
  After = 'isAfter',
}

interface Props extends ComponentProps<'div'> {
  reducedMotion?: boolean
  open: boolean
  position?: Position | null
  image: string
  text: string
}

const BoxHouse: FC<Props> = ({
  open,
  image,
  text,
  reducedMotion,
  position,
  ...rest
}) => (
  <div
    className={joinClassNames([
      styles.wrapper,
      reducedMotion && styles.reducedMotion,
      styles[position || ''],
    ])}
    {...rest}
  >
    <div className={`${styles.box} ${open ? styles.open : ''}`}>
      <div className={`${styles.side} ${styles.right}`}>
        <div
          className={`${styles.side} ${styles.flap} ${styles.roofFlap}`}
        ></div>
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <div className={`${styles.flap} ${styles.topFlap}`}></div>
      </div>
      <div className={`${styles.side} ${styles.bottom}`}></div>
      <div className={`${styles.side} ${styles.left}`}>
        <div
          className={`${styles.side} ${styles.flap} ${styles.roofFlap}`}
        ></div>
      </div>
      <div className={`${styles.side} ${styles.front}`}>
        <div className={`${styles.flap} ${styles.topFlap}`}></div>
      </div>
      <div className={styles.coin}>
        <div className={styles.inner}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(/images/menu/${image})` }}
          />
        </div>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  </div>
)

export default BoxHouse
