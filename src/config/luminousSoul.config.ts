import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Luminous Soul Dance',
  menu: {
    coinImage: '/luminoussoul/luminous_soul_menu.png',
    boxImage: 'luminoussoul/luminous_soul_house.svg',
    color: '#1C9554',
  },
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
          audioDescription: 'https://www.youtube.com/embed/3PWS8KbHQ0o',
        },
        {
          title: 'Inside The Box',
          showTitle: true,
          coverImage: '/luminoussoul/insidethebox/itb_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/6bYhwWLc5ic',
          audioDescription: 'https://www.youtube.com/embed/qjjSS2cSW0o',
        },
        {
          title: 'When I Hear Music',
          showTitle: true,
          coverImage: '/luminoussoul/whenihearmusic/wihm_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/MATNYxDAYVM',
          audioDescription: 'https://www.youtube.com/embed/kRUDWcyX3hk',
        },
      ],
    },
  ],
}
export default templatePage
