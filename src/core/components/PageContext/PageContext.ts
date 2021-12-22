import { createContext } from 'react'

interface PageContextState {
  navigating: boolean
  navigate: (path: string) => void
}

const PageContext = createContext<PageContextState>({
  navigating: false,
  navigate: () => console.log(),
})

export default PageContext
