export enum Media {
  Video,
  Audio,
  Image,
  Text,
}

export type VideoContent = { type: Media.Video; link: string }
export type AudioContent = { type: Media.Audio; link: string }
export type ImageContent = {
  type: Media.Image
  images: { link: string; audioDescription: string }[]
}

interface ProjectBase {
  title: string
  showTitle?: boolean
  coverImage: string
  audioDescription?: VideoContent | AudioContent
  audioIntro?: string
  transcript?: string
}
export type ImageProject = ImageContent & ProjectBase
export type VideoProject = VideoContent & ProjectBase
export type ProjectConfig = ImageProject | VideoProject

export interface ProjectGroupConfig {
  title: string
  projects: Array<ProjectConfig>
}

export interface PageConfig {
  group: string
  coverImage: string
  projectGroups: Array<ProjectGroupConfig>
}
