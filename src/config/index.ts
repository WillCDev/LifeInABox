import { PageConfig } from './config.types'
import dramaPage from './drama.config'

const siteConfig: Array<PageConfig> = [
  dramaPage,
  {
    group: 'Creative Writing',
    image: '/menu/writing.png',
    projects: [],
  },
  {
    group: 'Visual Arts',
    image: '/menu/art.png',
    projects: [
      { title: 'Project one', works: [] },
      { title: 'Project two', works: [] },
    ],
  },
  {
    group: 'Dance',
    image: '/menu/dance.png',
    projects: [],
  },
  {
    group: 'Gamelan',
    image: '/menu/gamelan.png',
    projects: [],
  },
  {
    group: 'Choir',
    image: '/menu/choir.png',
    projects: [],
  },
]

export * from './config.types'
export default siteConfig
