import { useRef } from 'react'
import { Howl } from 'howler'

export enum Sounds {
  DialUp,
  Printer,
}
type HowlInstance = InstanceType<typeof Howl>

const useAudioFile = (link: string): HowlInstance => {
  const fx = useRef<HowlInstance>(
    new Howl({
      src: [link],
      html5: true,
      preload: true,
    })
  )
  fx.current.volume(0.7)

  return fx.current
}

export default useAudioFile
