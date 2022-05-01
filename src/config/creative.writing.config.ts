import { Media, PageConfig } from './config.types'

const creativeWritingPage: PageConfig = {
  group: 'Creative Writing',
  image: '/writing/writing_menu.png',
  projectGroups: [
    {
      title: 'Final Pieces',
      projects: [
        {
          title: 'A Mask by Peter Livingstone',
          image: '/writing/amask/am_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/po_OnSS3TSY',
          },
          audioIntro: 'writing/amask/am_audiointro.mp3',
          transcript: 'writing/amask/am_transcript.html',
        },
        {
          title: 'When Lock downs over by Bernice Burrows',
          image: '/writing/whenlockdownisover/wlo_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: '',
          },
          transcript: 'writing/amask/wlo_transcript.html',
        },
        {
          title: 'A Little Ouch by Carly Palmer',
          image: '/writing/alittleouch/alo_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/1WLS5w7Rp-U',
          },
          audioIntro: '/writing/alittleouch/alo_audiointro.mp3',
          transcript: 'writing/amask/alo_transcript.html',
        },
        {
          title: "Lockdown the year we've had by Sarah Cantillon",
          image: '/writing/lockdowntheyearwevehad/tywh_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: '',
          },
          transcript: 'writing/amask/tywh_transcript.html',
        },
        {
          title: 'A Need for Natural Silence by Andy Ward',
          image: '/writing/aneedforanaturalsilence/nfns_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/JCrRF2XDIfM',
          },
          audioIntro: '/writing/aneedforanaturalsilence/nfns_audiointro.mp3',
          transcript: '/writing/aneedforanaturalsilence/nfns_transcript.html',
        },
        {
          title: 'Thousands by Alison Black',
          image: '/writing/thousands/th_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/AnNAnQP1kSU',
          },
          audioIntro: '/writing/thousands/th_audiointro.mp3',
          transcript: '/writing/thousands/th_transcript.mp3',
        },
        {
          title: 'My Lockdown Companion by Gerry McBride',
          image: '/writing/mylockdowncompanion/mlc_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: '',
          },
          transcript: '/writing/mylockdowncompanion/mlc_transcript.html',
        },
      ],
    },
    {
      title: 'Visual Arts Collaboration',
      projects: [
        {
          title: 'Scent by Alison Black',
          image: '/writing/scent/sc_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/fjXkcHfvjWU',
          },
          transcript: '/writing/scent/sc_transcript.html',
        },
        {
          title: 'Scent of the Roses by Alison Black',
          image: '/writing/scentoftheroses/sotr_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/EgrJ21pKAMI',
          },
          transcript: '/writing/scentoftheroses/sotr_transcript.html',
        },
        {
          title: 'The Seagull by Sarah Cantillon',
          image: '/writing/theseagull/tsg_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/_Du-LoXS0cs ',
          },
          transcript: '/writing/theseagull/tsg_transcript.html',
        },
        {
          title: 'New Hope by Sarah Cantillon',
          image: '/writing/newhope/nh_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/nMVfy4Vxv5k',
          },
          transcript: '/writing/newhope/nh_transcript.html',
        },
        {
          title: 'On Being Alone by Andy Ward',
          image: '/writing/onbeingalone/oba_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/CyAszOriLjc',
          },
          transcript: '/writing/onbeingalone/oba_transcript.html',
        },
      ],
    },
  ],
}
export default creativeWritingPage
