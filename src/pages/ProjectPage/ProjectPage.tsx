import { FC } from 'react'
import { Media, ProjectConfig } from 'config'
import ContentWrapper from 'common/components/ContentWrapper'
import styles from './ProjectPage.less'
import VideoContent from './VideoContent'

const ProjectPage: FC<ProjectConfig> = ({ title, primaryContent }) => {
  return (
    <ContentWrapper blurred height="100%">
      <div className={styles.contentWrapper}>
        <div className={styles.primaryContent}>
          {primaryContent.type === Media.Video && (
            <VideoContent title={title} link={primaryContent.link} />
          )}
        </div>
        <div className={styles.secondaryContent}></div>
      </div>
    </ContentWrapper>
  )
}

export default ProjectPage
