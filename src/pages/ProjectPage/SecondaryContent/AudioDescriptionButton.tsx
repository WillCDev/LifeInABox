import { FC, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { AudioContent } from 'config'
import useAudioFile from 'common/hooks/useAudioFile'

const AudioDescriptionButton: FC<AudioContent> = ({ link }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioDescription = useAudioFile(link)

  const handleClick = (): void => {
    if (audioDescription.playing()) {
      setIsPlaying(false)
      audioDescription.stop()
    } else {
      setIsPlaying(true)
      audioDescription.play()
    }
  }

  return (
    <Button
      aria-label={
        isPlaying
          ? 'Audio description playing. Click to stop.'
          : 'Listen to Audio Description'
      }
      onClick={handleClick}
    >
      AD
      <label>Audio Description</label>
    </Button>
  )
}

export default AudioDescriptionButton
