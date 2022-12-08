import React from 'react'
import styled from 'styled-components'
import logoGray from '/assets/logo-gray.svg'

export const InfoFooterLayout = () => {
  return (
    <FootContainer>
      <Text> WWW Exhibition market 온라인, 오프라인, 사람은 연결되어 있다</Text>
      <Logo src={logoGray} alt="회색로고" />
      <Text>Copyrightⓒ2022.WWW. All rights reserved.</Text>
    </FootContainer>
  )
}

const FootContainer = styled.div`
  background-color: #dfe2f4;
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
`
