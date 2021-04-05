import React, { FC, useContext } from 'react'
import { Box, Center } from '@chakra-ui/react'
import styles from './PageWrapper.module.less'
import PageContext from '../PageContext'

interface Props {
  backgroundImage?: string
  className?: string
}

const PageWrapper: FC<Props> = ({ children, backgroundImage, className }) => {
  const { navigating } = useContext(PageContext)

  return (
    <Box
      className={`${styles.pageWrapper} ${className} ${
        navigating ? styles.navigating : ''
      }`}
      key="backgroundImage"
    >
      <Center
        background={backgroundImage}
        backgroundSize="cover"
        className={styles.contentWrapper}
      >
        <section className={styles.content}>{children}</section>
      </Center>
    </Box>
  )
}
export default PageWrapper
