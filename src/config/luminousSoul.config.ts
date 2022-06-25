import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Luminous Soul Dance',
  coverImage: '/luminoussoul/luminous_soul_menu.png',
  projectGroups: [
    {
      title: 'Luminous Soul Dance',
      projects: [
        {
          title: 'Lockdown Duets',
          showTitle: true,
          coverImage: '/luminoussoul/lockdownduets/ld_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/AX3hxdcfhNA',
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/6bYhwWLc5ic',
          },
        },
        {
          title: 'Inside The Box',
          showTitle: true,
          coverImage: '/luminoussoul/insidethebox/itb_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/6bYhwWLc5ic',
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/qjjSS2cSW0o',
          },
        },
        {
          title: 'When I Hear Music',
          showTitle: true,
          coverImage: '/luminoussoul/whenihearmusic/wihm_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/MATNYxDAYVM',
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
