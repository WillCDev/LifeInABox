import React, { FC } from 'react'
import type { RouteComponentProps } from '@reach/router'
import PageWrapper from 'core/components/PageWrapper'
import styles from './HoldingPage.module.less'

const HoldingPage: FC<RouteComponentProps> = () => (
    <PageWrapper altText='Art work by ' backgroundImage="url('/images/background/promopic.jpg')">
      <div className={styles.holdingPage}>
        <header className={styles.heading}>
          <h1 className={styles.shadow}>Coming Soon...!</h1>
          <h1>Coming Soon...!</h1>
        </header>
      </div>
    </PageWrapper>
)

export default HoldingPage
