export enum Media {
  Video,
  Audio,
  Image,
  Text,
}

type VideoContent = { type: Media.Video; link: string; title: string }
type AudioContent = { type: Media.Audio; link: string; title: string }
type ImageContent = {
  type: Media.Image
  images: { link: string; title: string }[]
}
type TextContent = { type: Media.Text; link: string; title: string }

export interface ProjectConfig {
  title: string
  image: string
  primaryContent: VideoContent | AudioContent | ImageContent
  audioDescription?: VideoContent | AudioContent
}

export interface ProjectGroupConfig {
  title: string
  projects: Array<ProjectConfig>
}

export interface PageConfig {
  group: string
  image: string
  projectGroups:
    | [ProjectGroupConfig]
    | [ProjectGroupConfig, ProjectGroupConfig]
    | []
}
