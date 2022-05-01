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
          noTitleInImage: true,
          image: '/luminoussoul/lockdownduets/ld_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/AX3hxdcfhNA',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/6bYhwWLc5ic',
          },
        },
        {
          title: 'Inside The Box',
          noTitleInImage: true,
          image: '/luminoussoul/insidethebox/itb_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/6bYhwWLc5ic',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/qjjSS2cSW0o',
          },
        },
        {
          title: 'When I Hear Music',
          noTitleInImage: true,
          image: '/luminoussoul/whenihearmusic/wihm_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/MATNYxDAYVM',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/kRUDWcyX3hk',
          },
        },
      ],
    },
  ],
}
export default templatePage
