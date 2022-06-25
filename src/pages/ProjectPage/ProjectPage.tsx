import { FC } from 'react'
import { Media, ProjectConfig } from 'config'
import ContentWrapper from 'common/components/ContentWrapper'
import VideoContent from './VideoContent'

const ProjectPage: FC<ProjectConfig> = (project) => {
  return (
    <ContentWrapper blurred height="100%">
      {project.type === Media.Video && <VideoContent {...project} />}
    </ContentWrapper>
  )
}

export default ProjectPage
