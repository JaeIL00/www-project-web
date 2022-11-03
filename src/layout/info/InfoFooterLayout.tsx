import React from 'react'
import styled from 'styled-components'
import logoGray from '/assets/logoGray.svg'

export const InfoFooterLayout = () => {
  return (
    <FootContainer>
      <span> WWW Exhibition market 온라인, 오프라인, 사람은 연결되어 있다</span>
      <Logo src={logoGray} alt="회색로고" />
      <span>Copyrightⓒ2022.WWW. All rights reserved.</span>
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
