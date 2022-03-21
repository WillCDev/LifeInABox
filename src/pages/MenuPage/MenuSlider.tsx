import { FC, useState, useEffect, useContext } from 'react'
import { joinClassNames } from 'utils'
// Swiper Deps
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Pagination,
  Navigation,
  Controller,
  EffectCoverflow,
} from 'swiper'
import 'swiper/less'
import 'swiper/less/pagination'
// Menu Deps
import BoxHouse from './BoxHouse'
import { initialItemKey, getConfig } from './menu.config'
import styles from './styles/index.less'
import PageContext from 'common/components/PageContext'

interface Props {
  reducedMotion: boolean
}

const config = getConfig()

const MenuSlider: FC<Props> = ({ reducedMotion }) => {
  const { navigate } = useContext(PageContext)
  const [controlledSwiper, setControlledSwiper] = useState<any>()

  // Animation to slide in on first render
  useEffect(() => {
    if (controlledSwiper && !reducedMotion) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        controlledSwiper.slideTo(initialItemKey, 1100)
      }, 400)
    }
  }, [controlledSwiper, reducedMotion])

  return (
    <Swiper
      modules={[Keyboard, Pagination, Navigation, Controller, EffectCoverflow]}
      controller={{ control: controlledSwiper }}
      onSwiper={(controller) => setControlledSwiper(controller)}
      speed={700}
      effect={'coverflow'}
      coverflowEffect={{ rotate: 7, modifier: -1 }}
      keyboard={{ enabled: true, onlyInViewport: true }}
      centeredSlides
      simulateTouch
      slidesPerView={'auto'}
      initialSlide={reducedMotion ? initialItemKey : config.length}
      className={joinClassNames([
        styles.slider,
        !reducedMotion && styles.slideIn,
      ])}
    >
      {config.map(({ image, text, path, id }, index) => (
        <SwiperSlide key={id} className={styles.slide}>
          {({ isActive }) => (
            <BoxHouse
              onClick={() =>
                isActive ? navigate(path) : controlledSwiper.slideTo(index)
              }
              selected={isActive}
              image={image}
              text={text}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MenuSlider
