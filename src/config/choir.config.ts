import { Media, PageConfig } from './config.types'

const templatePage: PageConfig = {
  group: 'OACC Choir',
  image: '/choir/choir_menu.png',
  projectGroups: [
    {
      title: 'OACC Choir',
      projects: [
        {
          noTitleInImage: true,
          title: 'Little Boxes',
          image: '/choir/littleboxes/lb_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/qV18bMAqe_o',
          },
          audioIntro: '/choir/littleboxes/lb_audiointro.mp3',
        },
        {
          title: 'A Little Bit Of Love',
          image: '/choir/alittlebitoflove/albol_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/pkilFTWsR6I',
          },
          audioIntro: '/choir/alittlebitoflove/albol_audiointro.jmp3pg',
        },
        {
          title: 'Boxes Rap',
          image: '/choir/boxesrap/br_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/Dyk3slLtHNg',
          },
          audioIntro: '/choir/boxesrap/br_audiointro.mp3',
        },
        {
          title: 'Happy Birthday',
          image: '/choir/happybirthday/hb_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/evXfluGDC9o',
          },
          audioIntro: '/choir/happybirthday/hb_audiointro.mp3',
        },
        {
          title: 'Dawn Chorus Day',
          image: '/choir/dawnchorusday/dcd_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://www.youtube.com/watch?v=xbKqMvXljOE',
          },
          audioIntro: '/choir/dawnchorusday/dcd_audiointro.mp3',
        },
        {
          title: 'Jab Me Tender',
          image: '/choir/jabmetender/jmt_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/YTdNjfRESTQ',
          },
        },
        {
          noTitleInImage: true,
          title: 'Last Christmas',
          image: '/choir/lastchristmas/lc_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/YTdNjfRESTQ',
          },
        },
        {
          title: 'A Rather Strange Old Year',
          image: '/choir/aratherstrangeoldyear/soy_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/YTdNjfRESTQ',
          },
        },
        {
          noTitleInImage: true,
          title: 'Fairytale',
          image: '/choir/fairytale/ft_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/3SJDnTatF1w',
          },
        },
        {
          noTitleInImage: true,
          title: 'Covid Is All Around',
          image: '/choir/covidisallaround/ciaa_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/ZK_4_fKeQ8o',
          },
          audioIntro: '/choir/covidisallaround/ciaa_audiointro.mp3',
        },
        {
          title: 'Closer Together',
          image: '/choir/closertogether/ct_thumbnail.jpg',
          primaryContent: {
            type: Media.Video,
            link: 'https://youtu.be/IFafgrCr3CI',
          },
          audioIntro: '/choir/closertogether/ct_audiointro.mp3',
        },
      ],
    },
  ],
}
export default templatePage
