import { Media, PageConfig } from './config.types'

const dramaPage: PageConfig = {
  group: 'Monday Players',
  menu: {
    coinImage: '/drama/drama_menu.jpg',
    boxImage: 'drama/drama_house.svg',
    color: '#E42433',
  },
  projectGroups: [
    {
      title: 'Monday Players',
      projects: [
        {
          title: 'Love in lock down',
          coverImage: '/drama/loveinlockdown/lil_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/ST9hmuxXUuY',
          videoAD: 'https://www.youtube.com/embed/EJlAuQtzhQM',
        },
        {
          title: 'Waiting for Gemma',
          coverImage: '/drama/waitingforgemma/wfg_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/SjzfOPIuZCs',
          videoAD: 'https://www.youtube.com/embed/vwlSibMnuYo',
        },
        {
          title: 'Ronald the Clown and the Bird House',
          coverImage: '/drama/ronaldtheclown/rtc_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/fR2T6BuTxoU',
          videoAD: 'https://www.youtube.com/embed/RnDdSTo-nAs',
        },
        {
          title: 'Aslan Meets Doctor Who',
          coverImage: '/drama/aslanmeetsdrwho/amdw_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/7zw2Dpye7Kg',
          videoAD: 'https://www.youtube.com/embed/lyuHxHctNSk',
        },
        {
          title: 'The Wonderful Wizard of Lockdown',
          coverImage: '/drama/wonderfulwizardoflockdown/wwol_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/90sSwJFsI7E',
          videoAD: 'https://www.youtube.com/embed/FLGQiceE2kI',
        },
      ],
    },
  ],
}
export default dramaPage
