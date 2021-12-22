import joinClassNames from 'core/utils/joinClassNames'
import { FC } from 'react'
import styles from './BoxHouse.less'

export enum Position {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

interface Props {
  position: Position
  open: boolean
  image: string
  text: string
}

const BoxHouse: FC<Props> = ({ open, image, text, position }) => (
  <div className={joinClassNames([styles.wrapper, styles[position]])}>
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
