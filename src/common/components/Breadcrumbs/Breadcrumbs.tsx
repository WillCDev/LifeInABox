import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Crumbs = Array<{ path: string; name: string }>

const Breadcrumbs: FC = () => {
  const { pathname } = useLocation()
  const [trail, setTrail] = useState<Crumbs>([])

  console.log(pathname)

  useEffect(() => {
    const newTrail: Crumbs = [{ path: '/', name: 'Home' }]
    const buildCrumbs = (
      [crumb, ...rest]: string[],
      prevPath: string
    ): string | undefined => {
      if (!crumb) return
      const path = `${prevPath}/crumb`
      newTrail.push({ name: crumb, path })
      return buildCrumbs(rest, path)
    }
    buildCrumbs(pathname.split('/'), '/')
    console.log(newTrail)
    setTrail(newTrail)
  }, [pathname])

  return (
    <div style={{ position: 'absolute', bottom: 0, textAlign: 'center' }}>
      <Breadcrumb>
        {trail.map(({ path, name }, index) => (
          <BreadcrumbItem isCurrentPage={index === trail.length - 1}>
            <BreadcrumbLink as={Link} to={path}>
              {name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default Breadcrumbs
