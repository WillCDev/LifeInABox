import { FC } from 'react'
import { AspectRatio, Flex } from '@chakra-ui/react'
import SecondaryContent from '../SecondaryContent'
import { VideoProject } from 'config'

const VideoContent: FC<VideoProject> = ({ link, title }) => {
  return (
    <Flex h="100%" p="4vh" gridGap="4vh">
      <Flex flex={1} direction="column" justifyContent="center">
        <AspectRatio maxH="100%" ratio={16 / 9} border="3px solid white">
          <iframe title={title} src={link} allowFullScreen />
        </AspectRatio>
      </Flex>
      <SecondaryContent>Hello</SecondaryContent>
    </Flex>
  )
}

export default VideoContent
