import { FC, useState } from 'react'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import { Circle } from '@chakra-ui/react'
import Sound from 'react-sound'
import styles from './MusicPlayer.less'

const MusicPlayer: FC = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const togglePlaying = (): void => {
    setPlaying((play) => !play)
  }
  const VolumeComponent = playing ? FiVolume2 : FiVolumeX

  return (
    <>
      <Sound
        url="/audio/indonesian-loop.mp3"
        autoLoad
        playStatus={playing ? 'PLAYING' : 'PAUSED'}
        onLoad={togglePlaying}
        loop
        volume={3}
      />
      <Circle onClick={togglePlaying} className={styles.playerControls}>
        <button>
          <VolumeComponent />
        </button>
      </Circle>
    </>
  )
}

export default MusicPlayer
