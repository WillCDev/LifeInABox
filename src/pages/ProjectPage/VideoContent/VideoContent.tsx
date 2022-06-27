import { FC, useContext } from 'react'
import { AspectRatio, Flex } from '@chakra-ui/react'
import PageContext from 'common/components/PageContext'
import { VideoProject } from 'config'
import SecondaryContent from '../SecondaryContent'

const VideoContent: FC<VideoProject> = ({
  link,
  title,
  audioDescription,
  audioIntro,
}) => {
  const { playVideosWithAD } = useContext(PageContext)

  return (
    <Flex
      h="100%"
      p="4vh"
      gridGap="4vh"
      direction="column"
      justifyContent="center"
    >
      <Flex maxH="100%">
        <div
          style={{
            flex: '1 1 100%',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <AspectRatio ratio={16 / 9} border="3px solid white" maxHeight="100%">
            <iframe
              title={title}
              src={
                audioDescription && playVideosWithAD ? audioDescription : link
              }
              allowFullScreen
            />
          </AspectRatio>
        </div>

        <SecondaryContent
          videoAD={audioDescription}
          audioIntro={audioIntro}
          title={title}
        />
      </Flex>
    </Flex>
  )
}

export default VideoContent
