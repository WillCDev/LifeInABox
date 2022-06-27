import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import AudioIntroButton from './AudioIntroButton'
import VideoADButton from './VideoADButton'

interface Props {
  audioDescription?: string
  audioIntro?: string
}

const SecondaryContent: FC<Props> = ({
  children,
  audioDescription,
  audioIntro,
}) => {
  return (
    <Flex
      flex={0}
      direction="column"
      justifyContent="center"
      background="rgba(255, 255, 255, 0.8)"
      padding="20px"
      gridGap="5vh"
      color="#666c86"
    >
      {audioDescription && <VideoADButton />}
      {audioIntro && <AudioIntroButton link={audioIntro} />}
      {children}
    </Flex>
  )
}

export default SecondaryContent
