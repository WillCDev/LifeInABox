import { useMemo } from 'react'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageContext from './PageContext'

const PageContextProvider: FC = ({ children }) => {
  const storedPref = useMemo(() => {
    try {
      return JSON.parse(
        localStorage.getItem('LIAB-playVideosWithAD') || 'false'
      )
    } catch {
      return false
    }
  }, [])
  const navigate = useNavigate()
  const [navigating, setNavigating] = useState(false)
  const [playVideosWithAD, setPlayWithAD] = useState(storedPref)

  const setPlayVideosWithAD = (playWithAD: boolean): void => {
    localStorage.setItem('LIAB-playVideosWithAD', JSON.stringify(playWithAD))
    setPlayWithAD(playWithAD)
  }

  const onNavigate = (path: string, duration?: number): void => {
    setNavigating(true)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      setNavigating(false)
      navigate(path)
    }, duration || 600)
  }

  return (
    <PageContext.Provider
      value={{
        navigating,
        navigate: onNavigate,
        playVideosWithAD,
        setPlayVideosWithAD,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
export default PageContextProvider
