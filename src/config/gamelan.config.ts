import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Gamelan',
  image: '/gamelan/gamelan_menu.png',
  projectGroups: [
    {
      title: 'Gamelan',
      projects: [
        {
          showTitle: true,
          title: 'Not Waving But Drowning',
          image: '/gamelan/notwavingbutdrowning/nwbd_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/A7mH6BfGVoE',
          },
          audioIntro: '/gamelan/notwavingbutdrowning/nwbd_audiointro.mp3',
        },
        {
          showTitle: true,
          title: 'All Will Be Well',
          image: '/gamelan/allwillbewell/awbw_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/-s5GFY6ve-E',
          },
          audioIntro: '/gamelan/allwillbewell/awbw_audiointro.mp3',
        },
        {
          showTitle: true,
          title: 'Boxperience',
          image: '/gamelan/boxperience/bp_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/-WrgbkrK6vw ',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/wy6CsSlb80Y',
          },
        },
        {
          showTitle: true,
          title: 'Lockdown Gamelan',
          image: '/gamelan/lockdowngamelan/lg_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/UtHKvhsyaoI',
          },
        },
      ],
    },
  ],
}
export default templatePage
