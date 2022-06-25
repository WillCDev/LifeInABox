import { FC, ReactElement } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import SplashPage from './pages/SplashPage'
import ReadMorePage from 'pages/ReadMorePage'
import MenuPage from './pages/MenuPage'
import ProjectListPage from './pages/ProjectListPage'
import ProjectPage from 'pages/ProjectPage'
import menuConfig, { ProjectGroupConfig } from 'config'
import { toKebabCase } from 'utils'

const buildGroupRoutes = (group: ProjectGroupConfig): ReactElement => (
  <Route key={'root'} path={toKebabCase(group.title)} element={<Outlet />}>
    <Route key={group.title} path="" element={<ProjectListPage {...group} />} />
    {group.projects.map((project) => (
      <Route
        key={project.title}
        path={toKebabCase(project.title)}
        element={<ProjectPage {...project} />}
      />
    ))}
  </Route>
)

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<SplashPage />} />

      <Route path={'/about'} element={<ReadMorePage />} />

      <Route path={'/menu'} element={<MenuPage />} />

      {menuConfig.map(({ group, projectGroups }) => {
        if (!projectGroups.length) return null
        if (projectGroups.length === 1) {
          return buildGroupRoutes(projectGroups[0]!)
        } else
          return (
            <Route key={group} path={toKebabCase(group)} element={<Outlet />}>
              <Route
                key="root"
                path=""
                element={
                  <ProjectListPage
                    projects={projectGroups.map(({ title }) => ({
                      title,
                      showTitle: true,
                      image: '',
                    }))}
                  />
                }
              />
              {projectGroups.map(buildGroupRoutes)}
            </Route>
          )
      })}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouter
