import React from 'react'
import styled from 'styled-components'

interface HomeVideoProps {
  videoSrc: string
  videoHandler: () => void
}

export const HomeVideoLayout = ({ videoSrc, videoHandler }: HomeVideoProps) => {
  return (
    <VideoContainer>
      <VideoPlayer src={videoSrc} autoPlay controls muted onEnded={videoHandler} />
    </VideoContainer>
  )
}

const VideoContainer = styled.div`
  background-color: var(--black-300);
  width: calc(100vw * 79.58 / 100);
  padding: calc((100vh - 6.24rem) * 7.77 / 100) calc(100vw * 2.6 / 100);
`
const VideoPlayer = styled.video`
  width: 100%;
  height: calc(100vh * 75.18 / 100);
`
