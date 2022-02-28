import { FC } from 'react'
import { Avatar } from '@chakra-ui/react'
// import { ArrowLeftIcon } from '@chakra-ui/icons'
import YoutubeIcon from 'common/icons/YouttubeIcon'
import styles from './MediaLink.less'
import TwitterIcon from 'common/icons/TwitterIcon'
import FacebookIcon from 'common/icons/FacebookIcon'
import { joinClassNames } from 'utils'
import ExternalLink from '../ExternalLink'

const MediaLinks: FC = () => {
  // const ref = useRef(null)
  // const [isOpen, setIsOpen] = useState(false)
  // useOutsideClick({
  //   ref: ref,
  //   handler: () => setIsOpen(false),
  // })

  // const toggleIsOpen = (): void => {
  //   setIsOpen((open) => !open)
  // }

  return (
    <div className={styles.mediaLinkNew}>
      <ExternalLink
        to="https://www.youtube.com/channel/UCgiF1lql5kRiMta2At4Y9IA?view_as=subscriber"
        label="Goto the OpenArts youtube page"
      >
        <Avatar
          bgColor="#FF0000"
          icon={<YoutubeIcon />}
          className={joinClassNames([styles.link, styles.delay2])}
          size="sm"
          // onClick={toggleIsOpen}
        />
      </ExternalLink>

      <ExternalLink
        to="https://www.facebook.com/OpenArtsBelfast"
        label="Goto the OpenArts facebook page"
      >
        <Avatar
          bgColor="#1877F2"
          icon={<FacebookIcon />}
          className={joinClassNames([styles.link, styles.delay1])}
          size="sm"
          // onClick={toggleIsOpen}
        />
      </ExternalLink>

      <ExternalLink
        to="https://twitter.com/OPENARTSNI"
        label="Goto the OpenArts twitter feed"
      >
        <Avatar
          bgColor="#1DA1F2"
          icon={<TwitterIcon />}
          size="sm"
          className={styles.link}
          // onClick={toggleIsOpen}
        />
      </ExternalLink>
    </div>
  )
}

export default MediaLinks
