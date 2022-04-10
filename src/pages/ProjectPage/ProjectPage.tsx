import { FC } from 'react'
import { ProjectConfig } from 'config'

const ProjectPage: FC<ProjectConfig> = ({ title }) => {
  return <>{title}</>
}

export default ProjectPage
