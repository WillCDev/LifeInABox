import { FC } from 'react'
import {
  Button,
  ButtonGroup,
  useBreakpointValue,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import joinClassNames from 'common/utils/joinClassNames'
import styles from './SplashPage.less'
import AboutModal from 'common/components/AboutModal/AboutModal'
import { usePageContext } from 'common/components/PageContext/PageContext'

const SplashPage: FC = () => {
  const { navigating, navigate } = usePageContext()
  const useReducedMotion = usePrefersReducedMotion()
  const buttonSize = useBreakpointValue({
    base: 'md',
    lg: 'lg',
    md: 'md',
    sm: 'sm',
    xs: 'xs',
  })

  return (
    <div className={styles.splashPage}>
      <div
        className={joinClassNames([
          styles.wrapper,
          useReducedMotion && styles.reducedMotion,
          navigating && styles.fadeOut,
        ])}
      >
        <header className={styles.heading}>
          <h1 className={styles.title}>Living in a Box</h1>
          <span className={styles.subHeading}>By Open Arts</span>
        </header>

        <ButtonGroup spacing="20px">
          <AboutModal
            TriggerEl={({ onClick }) => (
              <Button
                variant="unstyled"
                size={buttonSize}
                className={styles.button}
                minWidth="20vw"
                background="#D53F8C"
                color="white"
                padding="0 5vw"
                onClick={onClick}
              >
                Read More
              </Button>
            )}
          />

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
  )
}

export default SplashPage
