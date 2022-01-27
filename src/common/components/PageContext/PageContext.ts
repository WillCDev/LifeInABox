import { createContext, useContext } from 'react'

interface PageContextState {
  navigating: boolean
  navigate: (path: string, duration?: number) => void
}

export const usePageContext = (): PageContextState => useContext(PageContext)

const PageContext = createContext<PageContextState>({
  navigating: false,
  navigate: () => console.log(),
})

export default PageContext
