import { FC, useMemo } from 'react'
import {
  Center,
  Heading,
  useMediaQuery,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Mousewheel, Navigation, Controller } from 'swiper'
import ContentWrapper from 'common/components/ContentWrapper'
import { usePageContext } from 'common/components/PageContext/PageContext'
import { joinClassNames, toKebabCase } from 'utils'
import styles from './ProjectListPage.less'
import { ProjectConfig } from 'config'

interface Props {
  projects: Array<Pick<ProjectConfig, 'title' | 'coverImage' | 'showTitle'>>
}

const ProjectListPage: FC<Props> = ({ projects }) => {
  // This should be the same as @mobile-max-height in 'common/styles/variables.less'
  const [isMobile] = useMediaQuery('(max-height: 500px)')
  const reducedMotion = usePrefersReducedMotion()
  const { navigate, navigating } = usePageContext()

  const items = useMemo(
    () => projects.sort(() => Math.random() - 0.5),
    [projects]
  )

  return (
    <ContentWrapper blurred>
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
        slidesPerView="auto"
        keyboard={{ enabled: true, onlyInViewport: true }}
        className={joinClassNames([
          styles.slider,
          reducedMotion && styles.reducedMotion,
          navigating && styles.slideOut,
        ])}
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
                      style={{ backgroundImage: `url(/assets/${coverImage})` }}
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
