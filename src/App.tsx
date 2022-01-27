import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import PortraitHint from 'common/components/PortraitHint'
import appRoutes from 'AppRoutes.config'
import ContentWrapper from 'common/components/ContentWrapper'
import { PageContextProvider } from 'common/components/PageContext'
import styles from './App.less'

const App: FC = () => {
  return (
    <ChakraProvider>
      <PortraitHint />
      <BrowserRouter>
        <PageContextProvider>
          <Box className={styles.pageWrapper}>
            <Routes>
              {appRoutes.map(({ Component, path, bgImage, bgColor }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <ContentWrapper image={bgImage} bgColor={bgColor}>
                      <Component />
                    </ContentWrapper>
                  }
                />
              ))}
              <Route path="*" element={() => <Navigate to="/" />} />
            </Routes>
          </Box>
        </PageContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
