import { PageConfig } from './config.types'
import dramaPage from './drama.config'
import gamelanPage from './gamelan.config'
import artPage from './art.config'
import choirPage from './choir.config'
import luminousSoulPage from './luminousSoul.config'
import creativeWritingPage from './creative.writing.config'

const siteConfig: Array<PageConfig> = [
  dramaPage,
  creativeWritingPage,
  artPage,
  luminousSoulPage,
  gamelanPage,
  choirPage,
]

export * from './config.types'
export default siteConfig
