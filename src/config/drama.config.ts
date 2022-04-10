import { Media, PageConfig } from './config.types'

const dramaPage: PageConfig = {
  group: 'Monday Players',
  image: '/menu/drama.jpg',
  projectGroups: [
    {
      title: 'Monday Players',
      projects: [
        {
          title: 'Love in lock down',
          image: '/thumbnails/drama/LoveInLockdown.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/ST9hmuxXUuY',
          },
          audioDescription: {
            type: Media.Video,
            link: 'https://youtu.be/vwlSibMnuYo',
          },
        },
        {
          title: 'Waiting for Gemma',
          image: '/thumbnails/drama/WaitingForGemma.jpg',
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
          image: '/thumbnails/drama/RonaldTheClown.jpg',
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
          image: '/thumbnails/drama/AslanMeetsDrWho.jpg',
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
          image: '/thumbnails/drama/WizardOfLockdown.jpg',
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
