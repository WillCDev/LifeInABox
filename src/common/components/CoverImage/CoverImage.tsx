import { FC } from 'react'
import styles from './CoverImage.less'

interface Props {
  image: string
  bgColor: string
}

const CoverImage: FC<Props> = ({ image, bgColor }) => (
  <div
    style={{
      backgroundImage: `url('/images/background/${image}')`,
      backgroundColor: bgColor,
    }}
    className={styles.cover}
  />
)

export default CoverImage
