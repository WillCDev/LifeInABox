import { FC, useMemo } from 'react'
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
import useControlledSwiper from 'common/hooks/useControlledSwiper'
import { joinClassNames, toKebabCase } from 'utils'
import styles from './ProjectListPage.less'
import { useLinkClickHandler } from 'react-router-dom'

interface Props {
  projects: Array<{ title: string; image: string; noTitleInImage?: boolean }>
}

const ProjectListPage: FC<Props> = ({ projects }) => {
  const reducedMotion = usePrefersReducedMotion()
  const [controlledSwiper, setControlledSwiper] = useControlledSwiper()

  const items = useMemo(
    () => projects.sort(() => Math.random() - 0.5),
    [projects]
  )

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
          initialSlide={reducedMotion ? 0 : projects.length}
          className={joinClassNames([
            styles.slider,
            !reducedMotion && styles.slideIn,
          ])}
          grabCursor
        >
          {items.map(({ image, title, noTitleInImage }, index) => {
            const onClick = useLinkClickHandler(`./${toKebabCase(title)}`)
            return (
              <SwiperSlide
                key={index}
                className={styles.slide}
                onClick={onClick}
              >
                {({ isActive }) => (
                  <>
                    <Center
                      as={isActive ? 'button' : undefined}
                      autoFocus={isActive}
                      role="link"
                      aria-label={`Click to go to ${title}`}
                      className={styles.coverImage}
                      style={{ backgroundImage: `url(/images${image})` }}
                    />
                    {noTitleInImage && (
                      <Heading className={styles.title} size={'xl'}>
                        {title}
                      </Heading>
                    )}
                  </>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </ContentWrapper>
    </>
  )
}

export default ProjectListPage
