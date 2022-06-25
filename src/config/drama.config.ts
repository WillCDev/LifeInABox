import { Media, PageConfig } from './config.types'

const dramaPage: PageConfig = {
  group: 'Monday Players',
  coverImage: '/drama/drama_menu.jpg',
  projectGroups: [
    {
      title: 'Monday Players',
      projects: [
        {
          title: 'Love in lock down',
          coverImage: '/drama/loveinlockdown/lil_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/ST9hmuxXUuY',
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/lyuHxHctNSk',
          },
        },
        {
          title: 'Waiting for Gemma',
          coverImage: '/drama/waitingforgemma/wfg_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/SjzfOPIuZCs',
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/vwlSibMnuYo',
          },
        },
        {
          title: 'Ronald the Clown and the Bird House',
          coverImage: '/drama/ronaldtheclown/rtc_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/fR2T6BuTxoU',
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/RnDdSTo-nAs',
          },
        },
        {
          title: 'Aslan Meets Doctor Who',
          coverImage: '/drama/aslanmeetsdrwho/amdw_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/7zw2Dpye7Kg',
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/lyuHxHctNSk',
          },
        },
        {
          title: 'The Wonderful Wizard of Lockdown',
          coverImage: '/drama/wonderfulwizardoflockdown/wwol_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/90sSwJFsI7E',
          audioDescription: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/FLGQiceE2kI',
          },
        },
      ],
    },
  ],
}
export default dramaPage
