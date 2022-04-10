import { usePrefersReducedMotion } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Swiper } from 'swiper/types'

const useControlledSwiper = (): [Swiper | undefined, StateChange<Swiper>] => {
  const reducedMotion = usePrefersReducedMotion()
  const [controlledSwiper, setControlledSwiper] = useState<Swiper>()

  // Animation to slide in on first render
  useEffect(() => {
    if (controlledSwiper && !reducedMotion) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        controlledSwiper.slideTo(0, 1100)
      }, 400)
    }
  }, [controlledSwiper, reducedMotion])

  return [controlledSwiper, setControlledSwiper]
}

export default useControlledSwiper
