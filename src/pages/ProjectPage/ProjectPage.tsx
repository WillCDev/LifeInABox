import { FC, useContext, useMemo } from 'react'
import { Center, Heading, usePrefersReducedMotion } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Pagination,
  Navigation,
  Controller,
  EffectCoverflow,
} from 'swiper'
import ContentWrapper from 'common/components/ContentWrapper'
import PageContext from 'common/components/PageContext'
import useControlledSwiper from 'common/hooks/useControlledSwiper'
import { joinClassNames, toKebabCase } from 'utils'
import { ProjectConfig } from 'config'
import styles from './ProjectPage.less'

const ProjectPage: FC<ProjectConfig> = ({ works }) => {
  const { navigate } = useContext(PageContext)
  const reducedMotion = usePrefersReducedMotion()
  const [controlledSwiper, setControlledSwiper] = useControlledSwiper()

  const items = useMemo(() => works.sort(() => Math.random() - 0.5), [works])

  return (
    <>
      <ContentWrapper blurred>
        <Swiper
          modules={[
            Keyboard,
            Pagination,
            Navigation,
            Controller,
            EffectCoverflow,
          ]}
          controller={{ control: controlledSwiper }}
          onSwiper={(controller) => setControlledSwiper(controller)}
          speed={700}
          slidesPerView="auto"
          effect={'coverflow'}
          coverflowEffect={{ rotate: 7, modifier: -1 }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          centeredSlides
          simulateTouch
          spaceBetween={30}
          initialSlide={reducedMotion ? 0 : works.length}
          className={joinClassNames([
            styles.slider,
            !reducedMotion && styles.slideIn,
          ])}
          grabCursor
        >
          {items.map(({ image, title }, index) => (
            <SwiperSlide
              key={index}
              className={styles.slide}
              onClick={() => navigate(`/${toKebabCase(title)}`)}
            >
              {({ isActive }) => (
                <>
                  <Center
                    as={isActive ? 'button' : undefined}
                    autoFocus={isActive}
                    className={styles.coverImage}
                    style={{ backgroundImage: `url(/images${image})` }}
                  ></Center>
                  <Heading className={styles.title} size={'xl'}>
                    {title}
                  </Heading>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentWrapper>
    </>
  )
}

export default ProjectPage
