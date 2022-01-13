import { FC, useState, useEffect } from 'react'
// Swiper Deps
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination, Navigation, Controller } from 'swiper'
import 'swiper/less'
import 'swiper/less/pagination'
// Menu Deps
import config, { initialItemKey } from './MenuPage.config'
import { getPosition } from './MenuPage.utils'
import BoxHouse from 'common/components/BoxHouse/BoxHouse'
import { usePrefersReducedMotion } from '@chakra-ui/react'
import styles from './MenuPage.less'
import joinClassNames from 'common/utils/joinClassNames'

const MenuPage: FC = () => {
  const reducedMotion = usePrefersReducedMotion()
  const [controlledSwiper, setControlledSwiper] = useState<any>()

  // Animation to slide in on first render
  useEffect(() => {
    if (controlledSwiper && !reducedMotion) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        controlledSwiper.slideTo(initialItemKey, 1200)
      }, 700)
    }
  }, [controlledSwiper, reducedMotion])

  return (
    <Swiper
      modules={[Keyboard, Pagination, Navigation, Controller]}
      controller={{ control: controlledSwiper }}
      onSwiper={(controller) => setControlledSwiper(controller)}
      speed={700}
      keyboard={{ enabled: true, onlyInViewport: true }}
      centeredSlides
      slidesPerView={'auto'}
      initialSlide={reducedMotion ? initialItemKey : 0}
      className={joinClassNames([!reducedMotion && styles.slideIn])}
    >
      {config.map(({ image, title }, index) => (
        <SwiperSlide key={title} style={{ width: '24vw' }}>
          {({ isActive }) => (
            <BoxHouse
              onClick={() => controlledSwiper.slideTo(index)}
              reducedMotion={reducedMotion}
              open={isActive}
              position={getPosition(index, controlledSwiper?.activeIndex)}
              image={image}
              text={title.toUpperCase()}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MenuPage
