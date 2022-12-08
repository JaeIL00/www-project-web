import React from 'react'
import styled from 'styled-components'
import { DownloadModalLayout } from './DownloadModalLayout'
import { HomeFooterLayout } from './HomeFooterLayout'
import logoWhite from '/assets/logo-white.svg'

export const HomeLayout = () => {
  return (
    <>
      <Container>
        <VideoContainer>
          <VideoPlayer src="" autoPlay loop muted />
        </VideoContainer>
        <BookContainer>
          <BookTitle>
            <img src={logoWhite} alt="로고 이미지" style={{ height: 'calc(100vh * 3.98 / 100)' }} /> <br />
            EXHIBITION <br />
            MARKET
          </BookTitle>
          <DownloadButton>Book download +</DownloadButton>
        </BookContainer>
        {/* <DownloadModalLayout />
      <Background /> */}
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
const Background = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 0.5;
`
const VideoContainer = styled.div`
  background-color: var(--black-300);
  width: calc(100vw * 79.58 / 100);
  padding: calc(100vh * 7.68 / 100) calc(100vw * 2.6 / 100);
`
const VideoPlayer = styled.video`
  width: 100%;
  height: calc(100vh * 75.18 / 100);
`
const BookContainer = styled.div`
  background-color: var(--main1-blue);
  width: calc(100vw * 15.14 / 100);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 calc(100vw * 2.6 / 100);
`
const BookTitle = styled.strong`
  margin-top: calc(100vh * 17.77 / 100);
  font-size: calc(100vh * 4.62 / 100);
  line-height: 3.83rem;
  letter-spacing: -0.02rem;
  color: var(--white);
`
const DownloadButton = styled.button`
  background-color: #000;
  padding: calc(100vh * 1.48 / 100) 0 calc(100vh * 1.66 / 100);
  margin-bottom: calc(100vh * 16.29 / 100);
  font-size: calc(100vh * 2.22 / 100);
  color: var(--white);
  &:hover {
    background-color: var(--main2-green);
  
`
