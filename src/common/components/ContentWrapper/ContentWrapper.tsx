import { FC } from 'react'
import { Center } from '@chakra-ui/react'
import styles from './ContentWrapper.less'
import CoverImage from '../CoverImage'

interface Props {
  image: string
  bgColor: string
}

const ContentWrapper: FC<Props> = ({ children, image, bgColor }) => (
  <Center backgroundColor={bgColor} className={styles.contentWrapper}>
    <CoverImage image={image} bgColor={bgColor} />
    <main>{children}</main>
  </Center>
)

export default ContentWrapper
