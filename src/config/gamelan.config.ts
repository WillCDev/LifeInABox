import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Gamelan',
  image: '/gamelan/gamelan_menu.png',
  projectGroups: [
    {
      title: 'Gamelan',
      projects: [
        {
          noTitleInImage: true,
          title: 'Not Waving But Drowning',
          image: '/gamelan/notwavingbutdrowning/nwbd_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/A7mH6BfGVoE',
          },
          audioIntro: '/gamelan/notwavingbutdrowning/nwbd_audiointro.mp3',
        },
        {
          noTitleInImage: true,
          title: 'All Will Be Well',
          image: '/gamelan/allwillbewell/awbw_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/-s5GFY6ve-E',
          },
          audioIntro: '/gamelan/allwillbewell/awbw_audiointro.mp3',
        },
        {
          noTitleInImage: true,
          title: 'Boxperience',
          image: '/gamelan/boxperience/bp_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/-WrgbkrK6vw ',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/wy6CsSlb80Y',
          },
        },
        {
          noTitleInImage: true,
          title: 'Lockdown Gamelan',
          image: '/gamelan/lockdowngamelan/lg_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/UtHKvhsyaoI',
          },
        },
      ],
    },
  ],
}
export default templatePage
