import { FC, useContext } from 'react'
import { joinClassNames } from 'utils'
// Swiper Deps
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Mousewheel, Controller, EffectCoverflow } from 'swiper'
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
      controller={{ control: controlledSwiper }}
      modules={[Keyboard, Controller, EffectCoverflow, Mousewheel]}
      mousewheel
      speed={800}
      simulateTouch
      centeredSlides
      effect="coverflow"
      slidesPerView="auto"
      onSwiper={(controller) => setControlledSwiper(controller)}
      coverflowEffect={{ rotate: 7, modifier: -1 }}
      keyboard={{ enabled: true, onlyInViewport: true }}
      initialSlide={reducedMotion ? 0 : config.length}
      className={joinClassNames([
        styles.slider,
        !reducedMotion && styles.slideIn,
      ])}
    >
      {config.map(({ menu, text, path, id }, index) => (
        <SwiperSlide key={id} className={styles.slide}>
          {({ isActive }) => (
            <BoxHouse
              onClick={() =>
                isActive ? navigate(path) : controlledSwiper?.slideTo(index)
              }
              selected={isActive}
              coinImage={menu.coinImage}
              faceImage={menu.boxImage}
              text={text}
              textColor={menu.color}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MenuSlider
