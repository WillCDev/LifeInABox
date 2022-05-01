import { Media, PageConfig } from './config.types'

const dramaPage: PageConfig = {
  group: 'Monday Players',
  image: '/drama/drama_menu.jpg',
  projectGroups: [
    {
      title: 'Monday Players',
      projects: [
        {
          title: 'Love in lock down',
          image: '/drama/loveinlockdown/lil_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/ST9hmuxXUuY',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/lyuHxHctNSk',
          },
        },
        {
          title: 'Waiting for Gemma',
          image: '/drama/waitingforgemma/wfg_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/SjzfOPIuZCs',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/vwlSibMnuYo',
          },
        },
        {
          title: 'Ronald the Clown and the Bird House',
          image: '/drama/ronaldtheclown/rtc_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/fR2T6BuTxoU',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/RnDdSTo-nAs',
          },
        },
        {
          title: 'Aslan Meets Doctor Who',
          image: '/drama/aslanmeetsdrwho/amdw_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/7zw2Dpye7Kg',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/lyuHxHctNSk',
          },
        },
        {
          title: 'The Wonderful Wizard of Lockdown',
          image: '/drama/wonderfulwizardoflockdown/wwol_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/90sSwJFsI7E',
          },
        },
      ],
    },
  ],
}
export default dramaPage
