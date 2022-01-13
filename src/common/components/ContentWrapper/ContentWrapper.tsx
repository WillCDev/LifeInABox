import { FC } from 'react'
import { Center } from '@chakra-ui/react'
import styles from './ContentWrapper.less'

interface Props {
  image: string
  bgColor: string
}

const ContentWrapper: FC<Props> = ({ children, image, bgColor }) => (
  <Center
    backgroundImage={`url('/images/background/${image}')`}
    backgroundSize="cover"
    backgroundColor={bgColor}
    className={styles.contentWrapper}
    alt={'backgroundImage'}
  >
    <section className={styles.content}>{children}</section>
  </Center>
)

export default ContentWrapper
