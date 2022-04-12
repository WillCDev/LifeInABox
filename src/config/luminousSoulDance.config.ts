import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Luminous Soul Dance',
  image: '/menu/writing.png',
  projectGroups: [
    {
      title: 'Luminous Soul Dance',
      projects: [
        {
          noTitleInImage: true,
          title: 'Lockdown Duets',
          image: '/thumbnails/luminousSoulDance/LockdownDuets.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/AX3hxdcfhNA',
          },
          // audioDescription: {
          //   type: Media.Video,
          //   link: 'https://youtu.be/vwlSibMnuYo',
          // },
        },
        {
          title: 'Inside The Box',
          image: '/thumbnails/luminousSoulDance/InsideTheBox_Titled.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/6bYhwWLc5ic',
          },
          // audioDescription: {
          //   type: Media.Video,
          //   link: 'https://youtu.be/vwlSibMnuYo',
          // },
        },
        {
          noTitleInImage: true,
          title: 'When I Hear Music',
          image: '/thumbnails/luminousSoulDance/WhenIHearMusic.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/MATNYxDAYVM',
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
