import { FC } from 'react'
import type { RouteComponentProps } from '@reach/router'
import PageWrapper from 'core/components/PageWrapper'
import { Wrap } from '@chakra-ui/react'
import MenuItem from './components/MenuItem'

const GamelanPage: FC<RouteComponentProps> = () => (
  <PageWrapper backgroundImage="url('/images/background/abstract.jpg')">
    <Wrap
      spacing="5vw"
      align="center"
      shouldWrapChildren
      justify="center"
      maxWidth={1200}
    >
      <MenuItem src="/images/menu/drama.jpg" title="drama" />
      <MenuItem src="/images/menu/art.png" title="art" />
      <MenuItem src="/images/menu/choir.png" title="choir" />
      <MenuItem src="/images/menu/gamelan.png" title="gamelan" />
      <MenuItem src="/images/menu/dance.png" title="dance" />
      <MenuItem src="/images/menu/writing.png" title="writing" />
    </Wrap>
  </PageWrapper>
)

export default GamelanPage
