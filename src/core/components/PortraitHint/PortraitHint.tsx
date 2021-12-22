import { FC } from 'react'
import { RepeatIcon } from '@chakra-ui/icons'
import { Flex, Heading, Text, ScaleFade, useMediaQuery } from '@chakra-ui/react'
import styles from './PortraitHint.module.less'

const PortraitHint: FC = () => {
  const [isLandscape] = useMediaQuery('screen and (orientation: landscape)')

  if (isLandscape) return null

  return (
    <Flex
      flexDirection="column"
      textAlign={'center'}
      justifyContent="center"
      className={styles.portraitHint}
    >
      <ScaleFade initialScale={0.8} in={true} reverse>
        <RepeatIcon
          boxSize="40vw"
          maxBlockSize={'100px'}
          className={styles.icon}
        />
        <Heading marginBottom="10px">Please rotate your screen</Heading>
        <Text fontWeight="light" fontSize="xl">
          This website is best viewed in landscape.
        </Text>
      </ScaleFade>
    </Flex>
  )
}
export default PortraitHint
