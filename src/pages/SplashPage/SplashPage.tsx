import { FC } from 'react'
import {
  Button,
  ButtonGroup,
  useBreakpointValue,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { joinClassNames } from 'utils'
import styles from './SplashPage.less'
import { usePageContext } from 'common/components/PageContext/PageContext'
import ContentWrapper from 'common/components/ContentWrapper'

const SplashPage: FC = () => {
  const { navigating, navigate } = usePageContext()

  const params = new URLSearchParams(location.search)
  const path = params.get('path')
  if (path) navigate(`/${decodeURIComponent(path)}`)

  const useReducedMotion = usePrefersReducedMotion()
  const buttonSize = useBreakpointValue({
    base: 'md',
    lg: 'lg',
    md: 'md',
    sm: 'sm',
    xs: 'xs',
  })

  return (
    <ContentWrapper>
      <div
        className={joinClassNames([
          styles.splashPage,
          useReducedMotion && styles.reducedMotion,
          navigating && styles.fadeOut,
        ])}
      >
        <div className={joinClassNames([styles.wrapper])}>
          <header className={styles.heading}>
            <h1 className={styles.title}>Living in a Box</h1>
            <span className={styles.subHeading}>By Open Arts</span>
          </header>

          <ButtonGroup spacing="20px">
            <Button
              variant="unstyled"
              size={buttonSize}
              className={styles.button}
              minWidth="20vw"
              background="#D53F8C"
              color="white"
              padding="0 5vw"
              onClick={() => navigate('/about', 700)}
            >
              Read More
            </Button>

            <Button
              variant="unstyled"
              size={buttonSize}
              rightIcon={<ArrowForwardIcon className={styles.icon} />}
              className={styles.button}
              minWidth="20vw"
              background="#57c165"
              color="white"
              padding="0 5vw"
              onClick={() => navigate('/menu', 700)}
            >
              View Projects
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default SplashPage
