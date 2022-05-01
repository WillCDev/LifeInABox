export enum Media {
  Video,
  Audio,
  Image,
  Text,
}

type VideoContent = { type: Media.Video; link: string }
type AudioContent = { type: Media.Audio; link: string }
type ImageContent = {
  type: Media.Image
  images: { link: string; audioDescription: string }[]
}

export interface ProjectConfig {
  title: string
  noTitleInImage?: boolean
  image: string
  primaryContent: VideoContent | AudioContent | ImageContent
  audioDescription?: VideoContent | AudioContent
  audioIntro?: string
  transcript?: string
}

export interface ProjectGroupConfig {
  title: string
  projects: Array<ProjectConfig>
}

export interface PageConfig {
  group: string
  image: string
  projectGroups: Array<ProjectGroupConfig>
}
