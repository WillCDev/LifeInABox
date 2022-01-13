export interface MenuItem {
  image: string
  title: string
}

const config: Array<MenuItem> = [
  { image: 'drama.jpg', title: 'Drama' },
  { image: 'writing.png', title: 'Creative Writing' },
  { image: 'art.png', title: 'Visual Arts' },
  { image: 'dance.png', title: 'Dance' },
  { image: 'gamelan.png', title: 'Gamelan' },
  { image: 'choir.png', title: 'Choir' },
]

export const initialItemKey = Math.floor(config.length / 2)

export default config
