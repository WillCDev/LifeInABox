import { FC } from 'react'
import { Flex, useMediaQuery, usePrefersReducedMotion } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Keyboard, Mousewheel, Navigation } from 'swiper'
import { ImageProject } from 'config'
import { joinClassNames } from 'utils'
import { usePageContext } from 'common/components/PageContext/PageContext'
import SecondaryContent from '../SecondaryContent'
import styles from './ImageContent.less'

const ImageContent: FC<ImageProject> = ({ title, images }) => {
  // This should be the same as @mobile-max-height in 'common/styles/variables.less'
  const [isMobile] = useMediaQuery('(max-height: 500px)')
  const reducedMotion = usePrefersReducedMotion()
  const { navigating } = usePageContext()

  return (
    <Flex h="100%" p="4vh" direction="column" justifyContent="center">
      <Swiper
        modules={[Keyboard, Navigation, Controller, Mousewheel]}
        grabCursor
        speed={800}
        navigation={!isMobile}
        mousewheel
        simulateTouch
        centeredSlides
        initialSlide={0}
        spaceBetween={30}
        slidesPerView={1.14}
        keyboard={{ enabled: true, onlyInViewport: true }}
        className={joinClassNames([
          styles.slider,
          reducedMotion && styles.reducedMotion,
          navigating && styles.slideOut,
        ])}
      >
        {images.map(({ audioDescription, link }, index) => (
          <SwiperSlide key={index}>
            {() => (
              <Flex h="100%" maxH="100%" key={link}>
                <SecondaryContent
                  audioDescription={audioDescription}
                  title={title}
                />
                <div
                  style={{
                    flex: '1 20%',
                    height: '100%',
                    border: '3px solid white',
                    overflow: 'hidden',
                  }}
                >
                  <img src={`/assets/${link}`} />
                </div>
              </Flex>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}

export default ImageContent
