import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'OACC Choir',
  menu: {
    coinImage: '/choir/choir_menu.png',
    boxImage: 'choir/choir_house.svg',
    color: '#E74688',
  },
  projectGroups: [
    {
      title: 'OACC Choir',
      projects: [
        {
          showTitle: true,
          title: 'Little Boxes',
          coverImage: '/choir/littleboxes/lb_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/qV18bMAqe_o',
          audioIntro: '/choir/littleboxes/lb_audiointro.mp3',
        },
        {
          title: 'A Little Bit Of Love',
          coverImage: '/choir/alittlebitoflove/albol_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/pkilFTWsR6I',
          audioIntro: '/choir/alittlebitoflove/albol_audiointro.mp3',
        },
        {
          title: 'Boxes Rap',
          coverImage: '/choir/boxesrap/br_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/Dyk3slLtHNg',
          audioIntro: '/choir/boxesrap/br_audiointro.mp3',
        },
        {
          title: 'Happy Birthday',
          coverImage: '/choir/happybirthday/hb_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/evXfluGDC9o',
          audioIntro: '/choir/happybirthday/hb_audiointro.mp3',
        },
        {
          title: 'Dawn Chorus Day',
          coverImage: '/choir/dawnchorusday/dcd_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/xbKqMvXljOE',
          audioIntro: '/choir/dawnchorusday/dcd_audiointro.mp3',
        },
        {
          title: 'Jab Me Tender',
          coverImage: '/choir/jabmetender/jmt_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/YTdNjfRESTQ',
          videoAD: 'https://www.youtube.com/embed/iTGPWe-lqXI',
        },
        {
          showTitle: true,
          title: 'Last Christmas',
          coverImage: '/choir/lastchristmas/lc_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/hdzhu7rXddQ',
        },
        {
          title: 'A Rather Strange Old Year',
          coverImage: '/choir/aratherstrangeoldyear/soy_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/EFYVrburRww',
        },
        {
          showTitle: true,
          title: 'Fairytale',
          coverImage: '/choir/fairytale/ft_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/3SJDnTatF1w',
        },
        {
          showTitle: true,
          title: 'Covid Is All Around',
          coverImage: '/choir/covidisallaround/ciaa_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/ZK_4_fKeQ8o',
          audioIntro: '/choir/covidisallaround/ciaa_audiointro.mp3',
        },
        {
          title: 'Closer Together',
          coverImage: '/choir/closertogether/ct_thumbnail.jpg',
          type: Media.Video,
          link: 'https://www.youtube.com/embed/IFafgrCr3CI',
          audioIntro: '/choir/closertogether/ct_audiointro.mp3',
        },
      ],
    },
  ],
}
export default templatePage
