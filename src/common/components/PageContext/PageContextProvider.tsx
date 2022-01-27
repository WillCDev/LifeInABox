import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageContext from './PageContext'

const PageContextProvider: FC = ({ children }) => {
  const navigate = useNavigate()
  const [navigating, setNavigating] = useState(false)

  const onNavigate = (path: string, duration?: number): void => {
    setNavigating(true)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      setNavigating(false)
      navigate(path)
    }, duration || 500)
  }

  return (
    <PageContext.Provider value={{ navigating, navigate: onNavigate }}>
      {children}
    </PageContext.Provider>
  )
}
export default PageContextProvider
