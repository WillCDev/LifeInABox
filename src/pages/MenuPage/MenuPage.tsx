import { FC, useState } from 'react'
import type { RouteComponentProps } from '@reach/router'
import { Carousel } from 'react-responsive-carousel'
import PageWrapper from 'core/components/PageWrapper'
import config from './MenuPage.config'
import BoxHouse, { Position } from 'core/components/BoxHouse/BoxHouse'

const getPosition = (index: number, selected: number): Position => {
  if (index === selected) return Position.Center
  if (index < selected) return Position.Left
  return Position.Right
}

const MenuPage: FC<RouteComponentProps> = () => {
  const [selected, setSelected] = useState(Math.round(config.length))

  const onSelected = (index: number): void => {
    console.log('onSelected', index)
    if (index === 0) return
    if (index === config.length + 1) return
    setSelected(index)
  }

  return (
    <PageWrapper backgroundImage="url('/images/background/abstract1.jpg')">
      <Carousel
        axis="horizontal"
        centerMode
        centerSlidePercentage={30}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        useKeyboardArrows={true}
        swipeable={true}
        emulateTouch={true}
        selectedItem={selected}
        transitionTime={500}
        swipeScrollTolerance={5}
        ariaLabel={undefined}
        onChange={onSelected}
      >
        {[
          <div key="start" />,
          ...config.map(({ image, title }, index) => (
            <div key={title}>
              <BoxHouse
                open={index === selected - 1}
                position={getPosition(index, selected - 1)}
                image={image}
                text={title.toUpperCase()}
              />
            </div>
          )),
          <div key="end" />,
        ]}
      </Carousel>
    </PageWrapper>
  )
}

export default MenuPage
