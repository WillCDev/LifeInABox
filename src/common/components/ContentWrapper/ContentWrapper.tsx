import { FC, useContext } from 'react'
import { Center } from '@chakra-ui/react'
import styles from './ContentWrapper.less'
import { joinClassNames } from 'utils'
import PageContext from '../PageContext'

interface Props {
  blurred?: boolean
  height?: string | number
}

const ContentWrapper: FC<Props> = ({ children, blurred, height }) => {
  const { navigating } = useContext(PageContext)
  return (
    <Center className={styles.contentWrapper}>
      <div
        className={joinClassNames([
          styles.cover,
          blurred && styles.blur,
          navigating && styles.navigating,
        ])}
        style={{
          backgroundImage: `url('/promopic.jpg')`,
        }}
      />
      <main style={{ height }}>{children}</main>
    </Center>
  )
}

export default ContentWrapper
