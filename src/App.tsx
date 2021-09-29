import React, { FC } from 'react'
import { Router, Redirect } from '@reach/router'
import { ChakraProvider } from '@chakra-ui/react'
import HoldingPage from 'pages/HoldingPage'
// import SplashPage from 'pages/SplashPage'
// import MenuPage from 'pages/MenuPage'
// import GamelanPage from 'pages/GamelanPage'
import { PageContextProvider } from 'core/components/PageContext'

const App: FC = () => (
  <ChakraProvider>
    <PageContextProvider>
      <Router>
        <HoldingPage path="/" />
        {/* <SplashPage path="/" /> */}
        {/* <MenuPage path="/menu" /> */}
        {/* <GamelanPage path="/gamelan" /> */}
        <Redirect from="*" to="/" noThrow />
      </Router>
    </PageContextProvider>
  </ChakraProvider>
)

export default App
