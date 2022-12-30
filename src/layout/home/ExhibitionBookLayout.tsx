import React from 'react'
import styled from 'styled-components'
import logoWhite from '/assets/logo-white.svg'

interface BookProps {
  setBookButton: React.Dispatch<React.SetStateAction<boolean>>
}

export const ExhibitionBookLayout = ({ setBookButton }: BookProps) => {
  return (
    <BookContainer>
      <BookTitle>
        <img src={logoWhite} alt="로고 이미지" style={{ height: 'calc(100vh * 3.98 / 100)' }} /> <br />
        EXHIBITION <br />
        MARKET
      </BookTitle>
      <DownloadButton onClick={() => setBookButton(true)}>Book download +</DownloadButton>
    </BookContainer>
  )
}
const BookContainer = styled.div`
  background-color: var(--main1-blue);
  width: calc(100vw * 15.14 / 100);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 calc(100vw * 2.6 / 100);
  overflow: hidden;
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
  margin-bottom: calc((100vh - 6.24rem) * 17.95 / 100);
  font-size: calc(100vh * 2.22 / 100);
  color: var(--white);
  &:hover {
    background-color: var(--main2-green);
  
`
