import React, { FC } from 'react'
import styles from './BoxHouse.module.less'

interface Props {
  open: boolean
  image: string
  text: string
}

const  BoxHouse: FC<Props> = ({ open, image, text }) => (
  <div className={styles.wrapper}>
    <div className={`${styles.box} ${open ? styles.open : ""}`}>
      <div className={`${styles.side} ${styles.right}`}>
        <div className={`${styles.side} ${styles.flap} ${styles.roofFlap}`}></div>
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <div className={`${styles.flap} ${styles.topFlap}`}></div>
      </div>
      <div className={`${styles.side} ${styles.bottom}`}></div>
      <div className={`${styles.side} ${styles.left}`}>
        <div className={`${styles.side} ${styles.flap} ${styles.roofFlap}`}></div>
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
