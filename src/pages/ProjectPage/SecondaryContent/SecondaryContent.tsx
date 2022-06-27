import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import AudioContentButton from './AudioContentButton'
import VideoADButton from './VideoADButton'

interface Props {
  videoAD?: string
  audioIntro?: string
  title: string
}

const SecondaryContent: FC<Props> = ({
  children,
  videoAD,
  audioIntro,
  title,
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
      {videoAD && <VideoADButton />}
      {audioIntro && (
        <AudioContentButton
          link={audioIntro}
          title={title}
          type="Audio Introduction"
          label="Audio Intro"
        />
      )}
      {children}
    </Flex>
  )
}

export default SecondaryContent
