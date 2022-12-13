import React from 'react'
import styled from 'styled-components'
import logo from '/assets/logo.svg'

export const ComingSoon = () => {
  return (
    <Container>
      <Contents>
        <img
          src={logo}
          alt="로고 이미지"
          style={{ width: 'calc(100vw * 8.43 / 100)', marginBottom: 'calc(100vw * 2.62 / 100)' }}
        />
        <strong style={{ fontSize: 'calc(100vw * 1.87 / 100)' }}>COMING SOON</strong>
        <br />
        <span style={{ fontSize: 'calc(100vw * 0.83 / 100)' }}>12/17 SAT OPEN</span>
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
  z-index: 99999;
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justiry-content: space-between;
  align-items: center;
  position: absolute;
`
