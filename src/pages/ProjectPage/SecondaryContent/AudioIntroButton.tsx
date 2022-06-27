import { FC, useEffect, useState } from 'react'
import { Button, Tooltip } from '@chakra-ui/react'
import { FiPlayCircle, FiStopCircle } from 'react-icons/fi'
import useAudioFile from 'common/hooks/useAudioFile'
import styles from './SecondaryContent.less'
import { joinClassNames } from 'utils'

const AudioIntroButton: FC<{ link: string }> = ({ link }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioIntro = useAudioFile(link)

  const handleClick = (): void => {
    if (audioIntro.playing()) {
      setIsPlaying(false)
      audioIntro.stop()
    } else {
      setIsPlaying(true)
      audioIntro.play()
    }
  }

  useEffect(() => {
    audioIntro.on('end', () => setIsPlaying(false))
  }, [])

  return (
    <Tooltip
      label={
        isPlaying
          ? 'Audio introduction playing. Click to stop.'
          : 'Listen to Audio Introduction'
      }
      hasArrow
    >
      <Button
        aria-label="Audio Introduction"
        onClick={handleClick}
        className={joinClassNames([
          styles.mediaButton,
          styles.audioButton,
          isPlaying && styles.playing,
        ])}
      >
        Audio Intro
        {isPlaying ? <FiStopCircle size={30} /> : <FiPlayCircle size={30} />}
      </Button>
    </Tooltip>
  )
}

export default AudioIntroButton
