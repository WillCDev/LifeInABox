import React, { FC, useState } from 'react'
import { navigate } from '@reach/router'
import PageContext from './PageContext'

const PageContextProvider: FC  = ({ children }) => {
  const [navigating, setNavigating] = useState(false)

  const onNavigate = (path: string) => {
    setNavigating(true)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      setNavigating(false)
      navigate(path)
    }, 300)
  }

  return (
    <PageContext.Provider value={{ navigating, navigate: onNavigate }}>
      {children}
    </PageContext.Provider>
  )
}
export default PageContextProvider
