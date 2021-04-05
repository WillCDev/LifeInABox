import React, { FC } from 'react'
import type { RouteComponentProps } from '@reach/router'
import PageWrapper from 'core/components/PageWrapper'

const GamelanPage: FC<RouteComponentProps> = () => (
  <PageWrapper backgroundImage="url('/images/bg1.jpg')">
    GamelanPage
  </PageWrapper>
)

export default GamelanPage
