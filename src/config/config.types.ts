export enum Media {
  Video,
  Audio,
  Image,
}

type VideoContent = { type: Media.Video; link: string }
type AudioContent = { type: Media.Audio; link: string }

export interface ProjectConfig {
  title: string
  works: Array<{
    title: string
    image?: string
    primaryContent: VideoContent | AudioContent
    audioDescription?: VideoContent | AudioContent
  }>
}

export interface PageConfig {
  group: string
  image: string
  projects: [ProjectConfig] | [ProjectConfig, ProjectConfig] | []
}
