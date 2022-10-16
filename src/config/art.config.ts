import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'Visual Arts',
  menu: {
    coinImage: '/art/art_menu.png',
    boxImage: 'art/art_house.svg',
    color: '#1B8AB8',
  },
  projectGroups: [
    {
      title: 'Final Pieces',
      projects: [
        {
          title: 'Angela Porter',
          showTitle: true,
          coverImage: '/art/finalpieces/angelaporter/ap1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/angelaporter/ap1_image.jpg',
              audioDescription:
                '/art/finalpieces/angelaporter/ap1_description.mp3',
            },
            {
              link: '/art/finalpieces/angelaporter/ap2_image.jpg',
              audioDescription:
                '/art/finalpieces/angelaporter/ap2_description.mp3',
            },
          ],
        },
        {
          title: 'Gary Linton',
          showTitle: true,
          coverImage: '/art/finalpieces/garylinton/gl1_image.jpg',

          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/garylinton/gl1_image.jpg',
              audioDescription:
                '/art/finalpieces/garylinton/gl1_description.mp3',
            },
          ],
        },
        {
          title: 'Jayne Mulholland',
          showTitle: true,
          coverImage: '/art/finalpieces/jaynemulholland/jm1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/jaynemulholland/jm1_image.jpg',
              audioDescription:
                '/art/finalpieces/jaynemulholland/jm1_description.mp3',
            },
          ],
        },
        {
          title: 'Jodie Devlin',
          showTitle: true,
          coverImage: '/art/finalpieces/jodiedevlin/jd1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/jodiedevlin/jd1_image.jpg',
              audioDescription:
                '/art/finalpieces/jodiedevlin/jd1_description.mp3',
            },
            {
              link: '/art/finalpieces/jodiedevlin/jd2_image.jpg',
              audioDescription:
                '/art/finalpieces/jodiedevlin/jd2_description.mp3',
            },
          ],
        },
        {
          title: 'Julie Dorrity',
          showTitle: true,
          coverImage: '/art/finalpieces/juliedorrity/jdo1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/juliedorrity/jdo1_image.jpg',
              audioDescription:
                '/art/finalpieces/juliedorrity/jdo1_description.mp3',
            },
            {
              link: '/art/finalpieces/juliedorrity/jdo2_image.jpg',
              audioDescription:
                '/art/finalpieces/juliedorrity/jdo2_description.mp3',
            },
          ],
        },
        {
          title: 'Katy Megahey',
          showTitle: true,
          coverImage: '/art/finalpieces/katymegahey/km1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/katymegahey/km1_image.jpg',
              audioDescription:
                '/art/finalpieces/katymegahey/km1_description.mp3',
            },
            {
              link: '/art/finalpieces/katymegahey/km2_image.jpg',
              audioDescription:
                '/art/finalpieces/katymegahey/km2_description.mp3',
            },
          ],
        },
        {
          title: 'Mary Lou McCord',
          showTitle: true,
          coverImage: '/art/finalpieces/mayloumccord/mlm1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/mayloumccord/mlm1_image.jpg',
              audioDescription:
                '/art/finalpieces/mayloumccord/mlm1_description.mp3',
            },
          ],
        },
        {
          title: 'Rene Boyd',
          showTitle: true,
          coverImage: '/art/finalpieces/reneboyd/reb1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/reneboyd/reb1_image.jpg',
              audioDescription:
                '/art/finalpieces/reneboyd/reb1_description.mp3',
            },
          ],
        },
        {
          title: 'Ryan McCartney',
          showTitle: true,
          coverImage: '/art/finalpieces/ryanmccartney/rmc1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/ryanmccartney/rmc1_image.jpg',
              audioDescription:
                '/art/finalpieces/ryanmccartney/rmc1_description.mp3',
            },
            {
              link: '/art/finalpieces/ryanmccartney/rmc2_image.jpg',
              audioDescription:
                '/art/finalpieces/ryanmccartney/rmc2_description.mp3',
            },
          ],
        },
        {
          title: 'Sarah Cantillon',
          showTitle: true,
          coverImage: '/art/finalpieces/sarahcantillon/sca1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/sarahcantillon/sca1_image.jpg',
              audioDescription:
                '/art/finalpieces/sarahcantillon/sca1_description.mp3',
            },
          ],
        },
        {
          title: 'Tim Leathem',
          showTitle: true,
          coverImage: '/art/finalpieces/timleathem/tl1_image.jpg',
          type: Media.Image,
          images: [
            {
              link: '/art/finalpieces/timleathem/tl1_image.jpg',
              audioDescription:
                '/art/finalpieces/timleathem/tl1_description.mp3',
            },
          ],
        },
      ],
    },
    {
      title: 'Creative Writing Collaboration',
      projects: [
        {
          title: 'Childhood Games by Tim Leathem',
          showTitle: true,
          coverImage: '/art/writingcollab/childhood_games/cgames_image.jpg',
          audioDescription:
            '/art/writingcollab/childhood_games/cgames_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/Nl0CQ02oVp8',
          transcript:
            '/art/writingcollab/childhood_games/cgames_transcript.html',
        },
        {
          title: 'Isolation Solace by Angela Porter',
          showTitle: true,
          coverImage: '/art/writingcollab/isolation_solace/isolace_image.jpg',
          audioDescription:
            '/art/writingcollab/isolation_solace/isolace_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/EBsj9S8wC84',
          transcript:
            '/art/writingcollab/isolation_solace/isolace_transcript.html',
        },
        {
          title: 'Forest by Alison Black',
          showTitle: true,
          coverImage: '/art/writingcollab/forest/forest_image.jpg',
          audioDescription: '/art/writingcollab/forest/forest_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/ek0-y9mEkXE',
          transcript: '/art/writingcollab/forest/forest_transcript.html',
        },
        {
          title: 'A Rhyme for Today by Gary Linton',
          showTitle: true,
          coverImage: '/art/writingcollab/rhyme/rhyme_image.png',
          audioDescription: '/art/writingcollab/rhyme/rhyme_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/b2QIrkypiOg',
          transcript: '/art/writingcollab/rhyme/rhyme_transcript.html',
        },
        {
          title: 'Little Red Riding Hood by Gary Linton',
          showTitle: true,
          coverImage: '/art/writingcollab/riding_hood/riding_hood_image.jpg',
          audioDescription:
            '/art/writingcollab/riding_hood/riding_hood_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/BIszxyEGLs8',
          transcript:
            '/art/writingcollab/riding_hood/riding_hood_transcript.html',
        },
        {
          title: 'Sounds by Jayne Mulholland',
          showTitle: true,
          coverImage: '/art/writingcollab/sounds/sounds_image.jpg',
          audioDescription: '/art/writingcollab/sounds/sounds_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/NxavTFS4G0s',
          transcript: '/art/writingcollab/sounds/sounds_transcript.html',
        },
        {
          title: 'I Miss by Katy Megahey',
          showTitle: true,
          coverImage: '/art/writingcollab/imiss/imiss_image.jpg',
          audioDescription: '/art/writingcollab/imiss/imiss_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/f9B4A3HzaJM',
          transcript: '/art/writingcollab/imiss/imiss_transcript.html',
        },
        {
          title: 'Greedy Stomach Blues by Mary Lou McCord',
          showTitle: true,
          coverImage: '/art/writingcollab/greedy/greedy_image.jpg',
          audioDescription: '/art/writingcollab/greedy/greedy_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/BVuT-kwKGEI',
          transcript: '/art/writingcollab/greedy/greedy_transcript.html',
        },
        {
          title: 'Mountain Rebel by Rene Boyd',
          showTitle: true,
          coverImage: '/art/writingcollab/rebel/rebel_image.jpg',
          audioDescription: '/art/writingcollab/rebel/rebel_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/NQAsbIYJ8Yg',
          transcript: '/art/writingcollab/rebel/rebel_transcript.html',
        },
        {
          title: 'Two Voices by Richard Geddis',
          showTitle: true,
          coverImage: '/art/writingcollab/two_voices/two_voices_image.jpg',
          audioDescription:
            '/art/writingcollab/two_voices/two_voices_description.mp3',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/woUyYqmbwGA',
          transcript:
            '/art/writingcollab/two_voices/two_voices_transcript.html',
        },
      ],
    },
  ],
}
export default templatePage
