import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import PortraitHint from 'common/components/PortraitHint'
import { PageContextProvider } from 'common/components/PageContext'
import styles from './App.less'
import AppRouter from 'AppRouter'
import Breadcrumbs from 'common/components/Breadcrumbs'
import MenuLinks from 'common/components/MenuLinks'

const App: FC = () => {
  return (
    <ChakraProvider>
      <PortraitHint />
      <BrowserRouter>
        <PageContextProvider>
          <Box className={styles.pageWrapper}>
            <MenuLinks className={styles.mediaLinks} />
            <AppRouter />
            <Breadcrumbs />
          </Box>
        </PageContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
