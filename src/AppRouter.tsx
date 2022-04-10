import { FC } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import SplashPage from './pages/SplashPage'
import ReadMorePage from 'pages/ReadMorePage'
import MenuPage from './pages/MenuPage'
import GroupPage from 'pages/GroupPage'
import ProjectListPage from './pages/ProjectListPage'
import menuConfig from 'config'
import { toKebabCase } from 'utils'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<SplashPage />} />

      <Route path={'/about'} element={<ReadMorePage />} />

      <Route path={'/menu'} element={<MenuPage />} />

      {menuConfig.map(({ group, projects }) => {
        if (projects.length === 1)
          return (
            <Route
              key={group}
              path={toKebabCase(group)}
              element={<ProjectListPage {...projects[0]} />}
            />
          )
        else
          return (
            <Route key={group} path={toKebabCase(group)} element={<Outlet />}>
              <Route
                key="root"
                path=""
                element={<GroupPage group={group} projects={projects} />}
              />
              {projects.map((project) => (
                <Route
                  key={project.title}
                  path={toKebabCase(project.title)}
                  element={<ProjectListPage {...project} />}
                >
                  {project.works.map((work) => (
                    <Route
                      key={work.title}
                      path={toKebabCase(work.title)}
                      element={<ProjectListPage {...project} />}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          )
      })}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouter
