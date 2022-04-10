import { FC, useContext } from 'react'
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
// Menu Deps
import BoxHouse from './BoxHouse'
import { getConfig } from './menu.config'
import styles from './styles/index.less'
import PageContext from 'common/components/PageContext'
import useControlledSwiper from 'common/hooks/useControlledSwiper'

interface Props {
  reducedMotion: boolean
}

const config = getConfig()

const MenuSlider: FC<Props> = ({ reducedMotion }) => {
  const { navigate } = useContext(PageContext)
  const [controlledSwiper, setControlledSwiper] = useControlledSwiper()

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
      initialSlide={reducedMotion ? 0 : config.length}
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
                isActive ? navigate(path) : controlledSwiper?.slideTo(index)
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
