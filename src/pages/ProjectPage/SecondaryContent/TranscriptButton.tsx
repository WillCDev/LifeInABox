import { FC, useState } from 'react'
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
import { BiBookReader } from 'react-icons/bi'
import { joinClassNames } from 'utils'
import styles from './SecondaryContent.less'

interface Props {
  link: string
  title: string
  label: string
}

const TranscriptButton: FC<Props> = ({ link, title, label }) => {
  const [isReading, setIsReading] = useState(false)

  return (
    <>
      <Tooltip label={`Read ${label}`} hasArrow>
        <Button
          aria-label={label}
          onClick={() => setIsReading(true)}
          className={joinClassNames([styles.mediaButton, styles.audioButton])}
        >
          Read
          <BiBookReader size={26} />
        </Button>
      </Tooltip>

      <Modal
        isOpen={isReading}
        onClose={() => setIsReading(false)}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent p="2rem 3rem 3.5rem" minW="60vw">
          <ModalCloseButton />
          <ModalHeader className={styles.modalTitle}>{title}</ModalHeader>
          <ModalBody className={styles.modalBody}>
            <iframe
              src={link}
              width="100%"
              style={{ minHeight: '50vh', maxHeight: '80vh' }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TranscriptButton
