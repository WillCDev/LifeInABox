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
            link: 'https://www.youtube.com/embed/po_OnSS3TSY',
          },
          audioIntro: 'writing/amask/am_audiointro.mp3',
          transcript: 'writing/amask/am_transcript.html',
        },
        {
          title: 'When Lock downs over by Bernice Burrows',
          image: '/writing/whenlockdownisover/wlo_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/EvBGx0A7PVg',
          },
          transcript: 'writing/amask/wlo_transcript.html',
        },
        {
          title: 'A Little Ouch by Carly Palmer',
          image: '/writing/alittleouch/alo_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/1WLS5w7Rp-U',
          },
          audioIntro: '/writing/alittleouch/alo_audiointro.mp3',
          transcript: 'writing/amask/alo_transcript.html',
        },
        {
          title: "Lockdown the year we've had by Sarah Cantillon",
          image: '/writing/lockdowntheyearwevehad/tywh_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/hYOcPONFAPk',
          },
          transcript: 'writing/amask/tywh_transcript.html',
        },
        {
          title: 'A Need for Natural Silence by Andy Ward',
          image: '/writing/aneedforanaturalsilence/nfns_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/JCrRF2XDIfM',
          },
          audioIntro: '/writing/aneedforanaturalsilence/nfns_audiointro.mp3',
          transcript: '/writing/aneedforanaturalsilence/nfns_transcript.html',
        },
        {
          title: 'Thousands by Alison Black',
          image: '/writing/thousands/th_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/AnNAnQP1kSU',
          },
          audioIntro: '/writing/thousands/th_audiointro.mp3',
          transcript: '/writing/thousands/th_transcript.mp3',
        },
        {
          title: 'My Lockdown Companion by Gerry McBride',
          image: '/writing/mylockdowncompanion/mlc_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/BswPV9TToLM',
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
            link: 'https://www.youtube.com/embed/fjXkcHfvjWU',
          },
          transcript: '/writing/scent/sc_transcript.html',
        },
        {
          title: 'Scent of the Roses by Alison Black',
          image: '/writing/scentoftheroses/sotr_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/EgrJ21pKAMI',
          },
          transcript: '/writing/scentoftheroses/sotr_transcript.html',
        },
        {
          title: 'The Seagull by Sarah Cantillon',
          image: '/writing/theseagull/tsg_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/_Du-LoXS0cs ',
          },
          transcript: '/writing/theseagull/tsg_transcript.html',
        },
        {
          title: 'New Hope by Sarah Cantillon',
          image: '/writing/newhope/nh_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/nMVfy4Vxv5k',
          },
          audioIntro: '/writing/newhope/nh_audiointro.m4a',
          transcript: '/writing/newhope/nh_transcript.html',
        },
        {
          title: 'On Being Alone by Andrew Ward',
          image: '/writing/onbeingalone/oba_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/embed/CyAszOriLjc',
          },
          transcript: '/writing/onbeingalone/oba_transcript.html',
        },
      ],
    },
  ],
}
export default creativeWritingPage
