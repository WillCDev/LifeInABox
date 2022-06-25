import { toKebabCase } from 'utils'
import siteConfig from '../../config'

export interface MenuItem {
  angle: number
  id: number
  text: string
  image: string
  path: string
}

export const zoomInDuration = 1300
export const menuItemCount = siteConfig.length

export const theta = 360 / menuItemCount

export const getConfig = (): Array<MenuItem> => {
  return siteConfig
    .sort(() => Math.random() - 0.5)
    .map(({ group, coverImage }, index) => ({
      image: coverImage,
      text: group,
      id: index,
      path: `${toKebabCase(group)}`,
      angle: theta * index,
    }))
}

// Bugger number = less responsvie swipes
export const swipeSpeedMultiplier = 9

const radiuMultiplier = 2
export const radius = Math.round(
  100 / Math.tan(Math.PI / (menuItemCount * radiuMultiplier))
)
