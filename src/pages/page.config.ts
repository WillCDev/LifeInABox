import { FC } from 'react'
import SplashPage from './SplashPage'
import MenuPage from './MenuPage'
import GamelanPage from './GamelanPage'

interface PageConfigItem {
  path: string
  Component: FC
  bgImage: string
  bgColor: string
}

const pageConfig: Array<PageConfigItem> = [
  {
    path: '/',
    Component: SplashPage,
    bgImage: 'promopic.jpg',
    bgColor: '#64846f',
  },
  {
    path: '/menu',
    Component: MenuPage,
    bgImage: 'abstract1.jpg',
    bgColor: '#BFCFCB',
  },
  {
    path: '/gamelan',
    Component: GamelanPage,
    bgImage: 'bg1.jpg',
    bgColor: '#64846f',
  },
]

export default pageConfig
