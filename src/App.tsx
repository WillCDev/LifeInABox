import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import PortraitHint from 'common/components/PortraitHint'
import pageConfig from 'pages/page.config'
import styles from './App.less'
import ContentWrapper from 'common/components/ContentWrapper'
import { PageContextProvider } from 'common/components/PageContext'

const App: FC = () => {
  return (
    <ChakraProvider>
      <PortraitHint />
      <BrowserRouter>
        <PageContextProvider>
          <Box className={styles.pageWrapper}>
            <Routes>
              {pageConfig.map(({ Component, path, bgImage, bgColor }) => (
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
