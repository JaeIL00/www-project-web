import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DownloadModalLayout } from '../../layout/home/DownloadModalLayout'
import { ExhibitionBookLayout } from '../../layout/home/ExhibitionBookLayout'
import { HomeFooterLayout } from '../../layout/home/HomeFooterLayout'
import { HomeVideoLayout } from '../../layout/home/HomeVideoLayout'

const motionVideo = [
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_1.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_2.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_4-1.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_4-2.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_5.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_6.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_7.mp4',
  'https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_9.mp4'
]

export const Home = () => {
  const [videoSrc, setVideoSrc] = useState('')
  const videoHandler = () => {
    const index = Math.floor(Math.random() * 7)
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
