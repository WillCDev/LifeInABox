import { PageConfig } from './config.types'
import dramaPage from './drama.config'
import gamelanPage from './gamelan.config'
import choirPage from './choir.config'
import luminousSoulPage from './luminousSoul.config'
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
  luminousSoulPage,
  gamelanPage,
  choirPage,
]

export * from './config.types'
export default siteConfig
