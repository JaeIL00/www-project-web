import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DownloadModalLayout } from '../../layout/home/DownloadModalLayout'
import { ExhibitionBookLayout } from '../../layout/home/ExhibitionBookLayout'
import { HomeFooterLayout } from '../../layout/home/HomeFooterLayout'
import { HomeVideoLayout } from '../../layout/home/HomeVideoLayout'

const motionVideo = [
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/5b3de998-18c8-4189-938b-2ef3418d7444.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/6c4a9451-c8a0-47e0-b1fc-6f07c0aa90cd.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/6f87330e-e20c-4aa9-89cc-88821b34c6d7.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/73df5343-a221-456b-9889-d06e7d6aa289.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/af88bfe4-a7df-4cbe-8428-b0100667602d.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/ec786988-ee51-48b1-8f22-998ec5117674.mp4'
]

export const Home = () => {
  const [videoSrc, setVideoSrc] = useState('')
  const videoHandler = () => {
    const index = Math.floor(Math.random() * 5)
    const checking = videoSrc === motionVideo[index]
    checking ? videoHandler() : setVideoSrc(motionVideo[index])
  }
  useEffect(() => {
    videoHandler()
  }, [])

  const [bookButton, setBookButton] = useState(false)

  return (
    <>
      <Container>
        <HomeVideoLayout videoSrc={videoSrc} videoHandler={videoHandler} />
        <ExhibitionBookLayout setBookButton={setBookButton} />
        {bookButton ? <DownloadModalLayout setBookButton={setBookButton} /> : null}
      </Container>
      <HomeFooterLayout />
    </>
  )
}

const Container = styled.div`
  min-height: calc(100vh - 6.24rem);
  display: flex;
  position: relative;
`
