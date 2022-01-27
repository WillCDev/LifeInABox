import { useMediaQuery, usePrefersReducedMotion } from '@chakra-ui/react'
import MenuSlider from './MenuSlider'
import { FC } from 'react'
import MenuCarousel from './MenuCarousel'

const MenuPage: FC = () => {
  // This should be the same as @mobile-max-height in 'common/styles/variables.less'
  const [isMobile] = useMediaQuery('(max-height: 500px)')
  const reducedMotion = usePrefersReducedMotion()

  return (
    <>
      {!isMobile && <MenuCarousel />}
      {isMobile && <MenuSlider reducedMotion={reducedMotion} />}
    </>
  )
}

export default MenuPage
