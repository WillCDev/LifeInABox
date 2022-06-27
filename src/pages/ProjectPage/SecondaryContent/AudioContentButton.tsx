import { createRef, FC, useState } from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
} from '@chakra-ui/react'
import { FiPlayCircle } from 'react-icons/fi'
import AudioPlayer from 'react-h5-audio-player'
import { joinClassNames } from 'utils'
import styles from './SecondaryContent.less'
import H5AudioPlayer from 'react-h5-audio-player'

interface Props {
  link: string
  title: string
  type: string
  label: string
}

const AudioContentButton: FC<Props> = ({ link, title, type, label }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = createRef<H5AudioPlayer>()

  return (
    <>
      <Tooltip
        label={
          isPlaying ? `${type} playing. Click to stop.` : `Listen to ${type}`
        }
        hasArrow
      >
        <Button
          aria-label={label}
          onClick={() => setIsPlaying(true)}
          className={joinClassNames([styles.mediaButton, styles.audioButton])}
        >
          {label}
          <FiPlayCircle size={30} />
        </Button>
      </Tooltip>

      <Modal
        isOpen={isPlaying}
        onClose={() => setIsPlaying(false)}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <span className={styles.title}>{title}:</span> {type}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className={styles.modalBody}>
            <AudioPlayer
              ref={playerRef}
              src={link}
              autoPlay={true}
              showJumpControls={false}
              customAdditionalControls={[]}
              onPlaying={() => {
                playerRef.current?.container?.current?.focus()
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AudioContentButton
