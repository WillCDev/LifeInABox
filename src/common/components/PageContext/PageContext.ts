import { createContext, useContext } from 'react'

interface PageContextState {
  navigating: boolean
  navigate: (path: string, duration?: number) => void
  playVideosWithAD: boolean
  setPlayVideosWithAD: (setting: boolean) => void
}

export const usePageContext = (): PageContextState => useContext(PageContext)

const PageContext = createContext<PageContextState>({
  navigating: false,
  navigate: () => undefined,
  playVideosWithAD: false,
  setPlayVideosWithAD: () => undefined,
})

export default PageContext
