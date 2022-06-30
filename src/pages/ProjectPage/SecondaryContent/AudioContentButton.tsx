import { createRef, FC, ReactNode, useState } from 'react'
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
import styles from './SecondaryContent.less'
import H5AudioPlayer from 'react-h5-audio-player'

interface Props {
  link: string
  title: string
  type: string
  label: ReactNode
}

const AudioContentButton: FC<Props> = ({ link, title, type, label }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = createRef<H5AudioPlayer>()

  return (
    <>
      <Tooltip label={`Listen to ${type}`} hasArrow>
        <Button
          aria-label={type}
          onClick={() => setIsPlaying(true)}
          className={styles.mediaButton}
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
        <ModalContent padding="2rem 3rem 3rem">
          <ModalHeader className={styles.modalTitle}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className={styles.modalBody}>
            <AudioPlayer
              ref={playerRef}
              src={`/assets/${link}`}
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
