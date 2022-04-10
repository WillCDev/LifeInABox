import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import styles from './Breadcrumbs.less'

type Crumbs = Array<{ path: string; name: string }>

const Breadcrumbs: FC = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<Crumbs>([])

  const { pathname } = useLocation()
  const omitMenu = ['/', '/menu', '/about'].includes(pathname)

  useEffect(() => {
    const crumbs: Crumbs = [{ path: '/', name: 'Home' }]
    if (!omitMenu) crumbs.push({ path: '/menu', name: 'Menu' })

    const buildCrumbs = (
      [crumb, ...rest]: string[],
      prevPath: string
    ): string | undefined => {
      if (!crumb) return
      const path = `${prevPath}${crumb}/`
      crumbs.push({ name: crumb, path })
      return buildCrumbs(rest, path)
    }
    const [, ...trail] = pathname.split('/')

    buildCrumbs(trail, '/')
    setBreadCrumbs(crumbs)
  }, [pathname])

  if (breadCrumbs.length === 1) return null
  return (
    <div className={styles.breadcrumbs}>
      <Breadcrumb>
        {breadCrumbs.map(({ path, name }, index) => (
          <BreadcrumbItem
            key={name}
            isCurrentPage={index === breadCrumbs.length - 1}
          >
            <BreadcrumbLink as={Link} to={path}>
              <strong>{name}</strong>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default Breadcrumbs
