import { FC } from 'react'
import { Image } from '@chakra-ui/react'
import styles from './MenuItem.less'

interface Props {
  src: string
  title: string
}

const MenuItem: FC<Props> = ({ src, title }) => (
  <button className={styles.menuItem}>
    <Image
      src={src}
      alt={title}
      title={title}
      objectFit="contain"
      borderRadius="full"
      className={`${styles.image} ${styles[title]}`}
    />
    <div className={styles.hoverOver}>{title.toUpperCase()}</div>
  </button>
)

export default MenuItem
