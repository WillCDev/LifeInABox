import { FC, useContext } from 'react'
import { FormControl, Switch, Tooltip } from '@chakra-ui/react'
import AudioDescriptionIcon from 'common/icons/AudioDescriptionIcon'
import PageContext from 'common/components/PageContext'

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
        display="flex"
        alignItems="center"
        as="span"
        cursor="pointer"
        maxHeight="50px"
      >
        <label style={{ fontSize: '30px' }} htmlFor="video-ad">
          <AudioDescriptionIcon width={'3em'} h="auto" />
        </label>
        <Switch
          aria-label="Play videos with Audio Descriptions"
          isChecked={playVideosWithAD}
          size="lg"
          id="video-ad"
          onChange={(e) => setPlayVideosWithAD(e.target.checked)}
        />
      </FormControl>
    </Tooltip>
  )
}

export default VideoADButton
