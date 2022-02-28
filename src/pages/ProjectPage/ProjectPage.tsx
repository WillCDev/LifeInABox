import ContentWrapper from 'common/components/ContentWrapper'
import { ProjectConfig } from 'config'
import { FC } from 'react'

const ProjectPage: FC<ProjectConfig> = ({ title }) => (
  <ContentWrapper blurred>
    <h1>Projects by: {title}</h1>
  </ContentWrapper>
)

export default ProjectPage
