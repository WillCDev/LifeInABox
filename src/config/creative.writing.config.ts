import { Media, PageConfig } from './config.types'

const creativeWritingPage: PageConfig = {
  group: 'Creative Writing',
  coverImage: '/writing/writing_menu.png',
  projectGroups: [
    {
      title: 'Final Pieces',
      projects: [
        {
          title: 'A Mask by Peter Livingstone',
          coverImage: '/writing/amask/am_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/po_OnSS3TSY',
          audioIntro: '/writing/amask/am_audiointro.mp3',
          transcript: '/writing/amask/am_transcript.html',
        },
        {
          title: 'When Lock downs over by Bernice Burrows',
          coverImage: '/writing/whenlockdownisover/wlo_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/EvBGx0A7PVg',
          transcript: '/writing/whenlockdownisover/wlo_transcript.html',
        },
        {
          title: 'A Little Ouch by Carly Palmer',
          coverImage: '/writing/alittleouch/alo_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/1WLS5w7Rp-U',
          audioIntro: '/writing/alittleouch/alo_audiointro.mp3',
          transcript: '/writing/alittleouch/alo_transcript.html',
        },
        {
          title: "Lockdown the year we've had by Sarah Cantillon",
          coverImage: '/writing/lockdowntheyearwevehad/tywh_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/hYOcPONFAPk',
          transcript: '/writing/lockdowntheyearwevehad/tywh_transcript.html',
        },
        {
          title: 'A Need for Natural Silence by Andy Ward',
          coverImage: '/writing/aneedforanaturalsilence/nfns_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/JCrRF2XDIfM',
          audioIntro: '/writing/aneedforanaturalsilence/nfns_audiointro.mp3',
          transcript: '/writing/aneedforanaturalsilence/nfns_transcript.html',
        },
        {
          title: 'Thousands by Alison Black',
          coverImage: '/writing/thousands/th_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/AnNAnQP1kSU',
          audioIntro: '/writing/thousands/th_audiointro.mp3',
          transcript: '/writing/thousands/th_transcript.html',
        },
        {
          title: 'My Lockdown Companion by Gerry McBride',
          coverImage: '/writing/mylockdowncompanion/mlc_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/BswPV9TToLM',
          transcript: '/writing/mylockdowncompanion/mlc_transcript.html',
        },
      ],
    },
    {
      title: 'Visual Arts Collaboration',
      projects: [
        {
          title: 'Scent by Alison Black',
          coverImage: '/writing/scent/sc_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/fjXkcHfvjWU',
          transcript: '/writing/scent/sc_transcript.html',
        },
        {
          title: 'Scent of the Roses by Alison Black',
          coverImage: '/writing/scentoftheroses/sotr_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/EgrJ21pKAMI',
          transcript: '/writing/scentoftheroses/sotr_transcript.html',
        },
        {
          title: 'The Seagull by Sarah Cantillon',
          coverImage: '/writing/theseagull/tsg_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/_Du-LoXS0cs ',
          transcript: '/writing/theseagull/tsg_transcript.html',
        },
        {
          title: 'New Hope by Sarah Cantillon',
          coverImage: '/writing/newhope/nh_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/nMVfy4Vxv5k',
          audioIntro: '/writing/newhope/nh_audiotintro.m4a',
          transcript: '/writing/newhope/nh_transcript.html',
        },
        {
          title: 'On Being Alone by Andrew Ward',
          coverImage: '/writing/onbeingalone/oba_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/CyAszOriLjc',
          transcript: '/writing/onbeingalone/oba_transcript.html',
        },
      ],
    },
  ],
}
export default creativeWritingPage
