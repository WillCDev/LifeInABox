import { PageConfig } from './config.types'
import dramaPage from './drama.config'
import creativeWritingPage from './creative.writing.config'

const siteConfig: Array<PageConfig> = [
  dramaPage,
  creativeWritingPage,
  {
    group: 'Visual Arts',
    image: '/menu/art.png',
    projectGroups: [
      { title: 'Project one', projects: [] },
      { title: 'Project two', projects: [] },
    ],
  },
  {
    group: 'Dance',
    image: '/menu/luminous_soul.png',
    projectGroups: [],
  },
  {
    group: 'Gamelan',
    image: '/menu/gamelan.png',
    projectGroups: [],
  },
  {
    group: 'Choir',
    image: '/menu/choir.png',
    projectGroups: [{ title: 'Open Arts Community Choir', projects: [] }],
  },
]

export * from './config.types'
export default siteConfig
