import React from 'react'
import styled from 'styled-components'
import logoWhite from '/assets/logo-white.svg'

export const HomeFooterLayout = () => {
  return (
    <FootContainer>
      <Text> WWW Exhibition market 온라인, 오프라인, 사람은 연결되어 있다</Text>
      <div style={{ width: 'calc(100vw - 6.24rem)', position: 'absolute', textAlign: 'center' }}>
        <Logo src={logoWhite} alt="로고 이미지" />
      </div>
      <Text>Copyrightⓒ2022.WWW. All rights reserved.</Text>
    </FootContainer>
  )
}

const FootContainer = styled.div`
  background-color: var(--main1-blue);
  height: 5.87rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.12rem;
`
const Logo = styled.img`
  width: 4.06rem;
`
const Text = styled.span`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);
`
