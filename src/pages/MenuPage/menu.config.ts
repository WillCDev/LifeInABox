export interface MenuItem {
  image: string
  title: string
  id: number
  angle: number
}

const baseConfig: Array<Omit<MenuItem, 'angle' | 'id'>> = [
  { image: 'drama.jpg', title: 'Drama' },
  { image: 'writing.png', title: 'Creative Writing' },
  { image: 'art.png', title: 'Visual Arts' },
  { image: 'dance.png', title: 'Dance' },
  { image: 'gamelan.png', title: 'Gamelan' },
  { image: 'choir.png', title: 'Choir' },
]

export const zoomInDuration = 1300
export const menuItemCount = baseConfig.length

export const theta = 360 / menuItemCount

export const getConfig = (): Array<MenuItem> => {
  return baseConfig
    .sort(() => Math.random() - 0.5)
    .map((configItem, index) => ({
      ...configItem,
      id: index,
      angle: theta * index,
    }))
}

// Bugger number = less responsvie swipes
export const swipeSpeedMultiplier = 9

const radiuMultiplier = 2
export const radius = Math.round(
  100 / Math.tan(Math.PI / (menuItemCount * radiuMultiplier))
)
export const initialItemKey = 0
