import React from 'react'
import styled from 'styled-components'
import logo from '/assets/logo.svg'

export const HomeLoadingLayout = () => {
  return (
    <Container>
      <Contents>
        <img src={logo} alt="로고 이미지" style={{ width: 'calc(100vw * 8.43 / 100)' }} />
        <Loadingbox>
          <Bar width="70%"></Bar>
        </Loadingbox>
      </Contents>
    </Container>
  )
}
const Container = styled.div`
  background: var(--background-white);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6.24rem;
  z-index: 99999;
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justiry-content: space-between;
  align-items: center;
  position: absolute;
`
const Loadingbox = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 53, 244, 0.1) 100%);
  width: calc(100vw * 17.91 / 100);
  height: 8px;
  position: relative;
  margin-top: calc(100vh * 4.75 / 100);
`
const Bar = styled.div<{ width: string }>`
  background-color: var(--main1-blue);
  width: ${({ width }) => width};
  height: inherit;
`
