import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Gamelan',
  menu: {
    coinImage: '/gamelan/gamelan_menu.png',
    boxImage: 'gamelan/gamelan_house.svg',
    color: '#736AAB',
  },
  projectGroups: [
    {
      title: 'Gamelan',
      projects: [
        {
          showTitle: true,
          title: 'Not Waving But Drowning',
          coverImage: '/gamelan/notwavingbutdrowning/nwbd_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/A7mH6BfGVoE',
          audioIntro: '/gamelan/notwavingbutdrowning/nwbd_audiointro.mp3',
        },
        {
          showTitle: true,
          title: 'All Will Be Well',
          coverImage: '/gamelan/allwillbewell/awbw_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/-s5GFY6ve-E',
          audioIntro: '/gamelan/allwillbewell/awbw_audiointro.mp3',
        },
        {
          showTitle: true,
          title: 'Boxperience',
          coverImage: '/gamelan/boxperience/bp_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/-WrgbkrK6vw ',
          videoAD: 'https://www.youtube.com/embed/wy6CsSlb80Y',
        },
        {
          showTitle: true,
          title: 'Lockdown Gamelan',
          coverImage: '/gamelan/lockdowngamelan/lg_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/UtHKvhsyaoI',
          videoAD: 'https://www.youtube.com/embed/GkOcXeBuONU',
        },
      ],
    },
  ],
}
export default templatePage
