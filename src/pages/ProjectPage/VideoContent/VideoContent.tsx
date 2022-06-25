import { FC, useEffect, useRef } from 'react'
import { AspectRatio } from '@chakra-ui/react'

interface Props {
  link: string
  title: string
}

const VideoContent: FC<Props> = ({ link, title }) => {
  const frameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (frameRef.current) {
      console.log('ARGHH')
      frameRef.current?.focus()
    }
  }, [frameRef.current])

  return (
    <AspectRatio maxH="100%" ratio={16 / 9} border="3px solid white">
      <iframe ref={frameRef} title={title} src={link} allowFullScreen />
    </AspectRatio>
  )
}

export default VideoContent
