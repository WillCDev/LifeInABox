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
import { usePageContext } from 'common/components/PageContext/PageContext'
import useControlledSwiper from 'common/hooks/useControlledSwiper'
import { joinClassNames, toKebabCase } from 'utils'
import styles from './ProjectListPage.less'
import { ProjectConfig } from 'config'

interface Props {
  projects: Array<Pick<ProjectConfig, 'title' | 'coverImage' | 'showTitle'>>
}

const ProjectListPage: FC<Props> = ({ projects }) => {
  const reducedMotion = usePrefersReducedMotion()
  const { navigate, navigating } = usePageContext()
  const [controlledSwiper, setControlledSwiper] = useControlledSwiper()

  const items = useMemo(
    () => projects.sort(() => Math.random() - 0.5),
    [projects]
  )

  return (
    <ContentWrapper blurred>
      <Swiper
        modules={[
          Controller,
          Keyboard,
          Pagination,
          Navigation,
          EffectCoverflow,
        ]}
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
        speed={700}
        slidesPerView="auto"
        effect={'coverflow'}
        coverflowEffect={{ rotate: 7, modifier: -1 }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        centeredSlides
        simulateTouch
        spaceBetween={30}
        initialSlide={0}
        className={joinClassNames([
          styles.slider,
          reducedMotion && styles.reducedMotion,
          navigating && styles.slideOut,
        ])}
        grabCursor
      >
        {items.map(({ coverImage, title, showTitle }, index) => {
          const onClick = (): void =>
            navigate(`${window.location.pathname}/${toKebabCase(title)}`, 800)
          return (
            <SwiperSlide key={index} className={styles.slide} onClick={onClick}>
              {({ isActive }) => (
                <>
                  <Center
                    as={isActive ? 'button' : undefined}
                    autoFocus={isActive}
                    role="link"
                    aria-label={`Click to go to ${title}`}
                    className={styles.coverImage}
                  >
                    <Center
                      className={joinClassNames([
                        styles.bgImage,
                        showTitle && styles.blur,
                      ])}
                      style={{ backgroundImage: `url(${coverImage})` }}
                    />
                  </Center>
                  {showTitle && (
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
  )
}

export default ProjectListPage
