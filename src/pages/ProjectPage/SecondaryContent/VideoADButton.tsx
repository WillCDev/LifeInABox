import { FC, useContext } from 'react'
import { Button, FormControl, Switch, Tooltip } from '@chakra-ui/react'
import { FaAudioDescription } from 'react-icons/fa'
import PageContext from 'common/components/PageContext'
import styles from './SecondaryContent.less'

const VideoADButton: FC = () => {
  const { playVideosWithAD, setPlayVideosWithAD } = useContext(PageContext)

  return (
    <Tooltip
      label={
        playVideosWithAD
          ? 'Play videos without Audio Descriptions'
          : 'Play videos with Audio Descriptions'
      }
      hasArrow
    >
      <FormControl
        as={Button}
        tabIndex={-1}
        className={styles.mediaButton}
        onClick={(e) => {
          e.preventDefault()
          setPlayVideosWithAD(!playVideosWithAD)
        }}
      >
        <FaAudioDescription fill="currentColor" size={36} />
        <Switch
          aria-label="Play videos with Audio Descriptions"
          isChecked={playVideosWithAD}
          size="md"
          id="video-ad"
          onChange={(e) => setPlayVideosWithAD(e.target.checked)}
        ></Switch>
      </FormControl>
    </Tooltip>
  )
}

export default VideoADButton
