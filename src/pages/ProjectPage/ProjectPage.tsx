import { FC } from 'react'
import { Media, ProjectConfig } from 'config'
import ContentWrapper from 'common/components/ContentWrapper'
import VideoContent from './VideoContent'
import ImageContent from './ImageContent'

const ProjectPage: FC<ProjectConfig> = (project) => {
  console.log('HMMMM', project)
  return (
    <ContentWrapper blurred height="100%">
      {project.type === Media.Video && <VideoContent {...project} />}
      {project.type === Media.Image && <ImageContent {...project} />}
    </ContentWrapper>
  )
}

export default ProjectPage
