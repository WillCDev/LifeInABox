import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Luminous Soul Dance',
  image: '/luminoussoul/luminous_soul_menu.png',
  projectGroups: [
    {
      title: 'Luminous Soul Dance',
      projects: [
        {
          title: 'Lockdown Duets',
          showTitle: true,
          image: '/luminoussoul/lockdownduets/ld_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/AX3hxdcfhNA',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/6bYhwWLc5ic',
          },
        },
        {
          title: 'Inside The Box',
          showTitle: true,
          image: '/luminoussoul/insidethebox/itb_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/6bYhwWLc5ic',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/qjjSS2cSW0o',
          },
        },
        {
          title: 'When I Hear Music',
          showTitle: true,
          image: '/luminoussoul/whenihearmusic/wihm_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/MATNYxDAYVM',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/kRUDWcyX3hk',
          },
        },
      ],
    },
  ],
}
export default templatePage
