import { FC, useRef, useState } from 'react'
import { Avatar, Button, VStack, useOutsideClick } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { joinClassNames } from 'utils'
import YoutubeIcon from 'common/icons/YouttubeIcon'
import TwitterIcon from 'common/icons/TwitterIcon'
import FacebookIcon from 'common/icons/FacebookIcon'
import ExternalLink from '../ExternalLink'
import styles from './MenuLinks.less'
import OpenArtsIcon from 'common/icons/OpenArtsIcon'

interface Props {
  className?: string
}

const MenuLinks: FC<Props> = ({ className }) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  })

  const toggleIsOpen = (): void => {
    setIsOpen((open) => !open)
  }

  return (
    <div
      ref={ref}
      className={joinClassNames([styles.menuLinks, className])}
      aria-label="Links"
    >
      <Button
        aria-label="Social Media Links"
        onClick={toggleIsOpen}
        className={styles.button}
      >
        <ChevronUpIcon marginRight="6px" />
        Links
      </Button>
      {isOpen && (
        <div className={styles.popOver}>
          <VStack alignItems="end">
            <ExternalLink
              to="https://openartsni.org/"
              label="Goto the OpenArts website"
            >
              <Avatar
                bgColor="#1DA1F2"
                icon={<OpenArtsIcon />}
                className={joinClassNames([styles.link, styles.delay3])}
                onClick={toggleIsOpen}
                overflow="hidden"
              />
            </ExternalLink>
            <ExternalLink
              to="https://www.youtube.com/channel/UCgiF1lql5kRiMta2At4Y9IA?view_as=subscriber"
              label="Goto the OpenArts youtube page"
            >
              <Avatar
                bgColor="#FF0000"
                icon={<YoutubeIcon />}
                className={joinClassNames([styles.link, styles.delay2])}
                onClick={toggleIsOpen}
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
                onClick={toggleIsOpen}
              />
            </ExternalLink>

            <ExternalLink
              to="https://twitter.com/OPENARTSNI"
              label="Goto the OpenArts twitter feed"
            >
              <Avatar
                bgColor="#1DA1F2"
                icon={<TwitterIcon />}
                className={styles.link}
                onClick={toggleIsOpen}
              />
            </ExternalLink>
          </VStack>
        </div>
      )}
    </div>
  )
}

export default MenuLinks
