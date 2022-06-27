import { FC, useContext } from 'react'
import { FormControl, Switch, Tooltip } from '@chakra-ui/react'
import AudioDescriptionIcon from 'common/icons/AudioDescriptionIcon'
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
      <FormControl as="span" className={styles.mediaButton} maxHeight="48px">
        <label
          style={{
            fontSize: '30px',
            marginLeft: '-13px',
            cursor: 'inherit',
          }}
          htmlFor="video-ad"
        >
          <AudioDescriptionIcon width={'2.3em'} h="auto" />
        </label>
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
