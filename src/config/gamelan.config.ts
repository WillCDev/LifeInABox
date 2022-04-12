import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Gamelan',
  image: '/menu/writing.png',
  projectGroups: [
    {
      title: 'Gamelan',
      projects: [
        {
          noTitleInImage: true,
          title: 'Not Waving But Drowning',
          image: '/thumbnails/gamelan/NotWavingButDrowning_Untitled.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/A7mH6BfGVoE',
          },
          // audioDescription: {
          //   type: Media.Video,
          //   link: 'https://youtu.be/vwlSibMnuYo',
          // },
        },
        {
          noTitleInImage: true,
          title: 'All Will Be Well',
          image: '/thumbnails/gamelan/AllWillBeWell_Untitled.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/-s5GFY6ve-E',
          },
          // audioDescription: {
          //   type: Media.Video,
          //   link: 'https://youtu.be/vwlSibMnuYo',
          // },
        },
        {
          noTitleInImage: true,
          title: 'Boxperience',
          image: '/thumbnails/gamelan/Boxperience_Untitled.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/-WrgbkrK6vw ',
          },
          // audioDescription: {
          //   type: Media.Video,
          //   link: 'https://youtu.be/vwlSibMnuYo',
          // },
        },
        {
          noTitleInImage: true,
          title: 'Lockdown Gamelan',
          image: '/thumbnails/gamelan/LockdownGamelan_Untitled.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/UtHKvhsyaoI',
          },
          // audioDescription: {
          //   type: Media.Video,
          //   link: 'https://youtu.be/vwlSibMnuYo',
          // },
        },
      ],
    },
  ],
}
export default templatePage
