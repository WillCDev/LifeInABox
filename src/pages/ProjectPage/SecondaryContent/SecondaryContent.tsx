import { FC } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { FaAudioDescription, FaChevronCircleLeft } from 'react-icons/fa'
import AudioContentButton from './AudioContentButton'
import TranscriptButton from './TranscriptButton'
import VideoADButton from './VideoADButton'
import styles from './SecondaryContent.less'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props {
  videoAD?: string
  audioIntro?: string
  audioDescription?: string
  title: string
  transcript?: string
}

const SecondaryContent: FC<Props> = ({
  children,
  videoAD,
  audioIntro,
  audioDescription,
  transcript,
  title,
}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Flex
      flex={0}
      direction="column"
      justifyContent="center"
      background="rgba(255, 255, 255, 0.8)"
      padding="20px"
      gridGap="5vh"
      color="#666c86"
      tabIndex={0}
      aria-label="Controls"
    >
      <Button
        className={styles.mediaButton}
        onClick={() => {
          const path = pathname.split('/')
          path.pop()
          navigate(path.join('/'))
        }}
        aria-label="Back to previous page"
      >
        <FaChevronCircleLeft size={26} className={styles.hoverLeft} />
        Back
      </Button>

      {videoAD && <VideoADButton />}

      {audioIntro && (
        <AudioContentButton
          link={audioIntro}
          title={title}
          type="Audio Introduction"
          label="Intro"
        />
      )}

      {audioDescription && (
        <AudioContentButton
          link={audioDescription}
          title={title}
          type="Audio Description"
          label={<FaAudioDescription fill="currentColor" size={36} />}
        />
      )}

      {transcript && (
        <TranscriptButton
          link={transcript}
          title={title}
          label={'Poem / Story'}
        />
      )}
      {children}
    </Flex>
  )
}

export default SecondaryContent
