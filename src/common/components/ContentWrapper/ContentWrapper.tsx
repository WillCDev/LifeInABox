import { FC, useContext } from 'react'
import { Center } from '@chakra-ui/react'
import styles from './ContentWrapper.less'
import { joinClassNames } from 'utils'
import PageContext from '../PageContext'

interface Props {
  blurred?: boolean
}

const ContentWrapper: FC<Props> = ({ children, blurred }) => {
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
          backgroundImage: `url('/images/background/promopic.jpg')`,
        }}
      />
      <main>{children}</main>
    </Center>
  )
}

export default ContentWrapper
