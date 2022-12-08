import React from 'react'
import styled from 'styled-components'
import { DownloadModalLayout } from './DownloadModalLayout'

export const HomeLayout = () => {
  return (
    <Container>
      <div>
        <div></div>
      </div>
      <BookContainer>
        <BookTitle>
          WWW <br />
          EXHIBITION <br />
          MARKET
        </BookTitle>
        <DownloadButton>Book download +</DownloadButton>
      </BookContainer>
      <DownloadModalLayout />
      <Background />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 6.24rem);
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
const BookContainer = styled.div`
  background-color: var(--main1-blue);
  width: calc(100vw * 20.41 / 100 - 6.24rem);
  height: calc(100vh - 6.24rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 3.12rem;
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
