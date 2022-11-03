import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const InfoHeaderLayout = () => {
  return (
    <HeaderContainer>
      <LinkBox>
        <Text to="www">www</Text>
      </LinkBox>
      <LinkBox>
        <Text to="how">HOW</Text>
      </LinkBox>
      <LinkBox>
        <Text to="credit">CREDIT</Text>
      </LinkBox>
      <LinkBox>
        <Text to="font">FONT</Text>
      </LinkBox>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  padding: 1.5rem 0;
  margin-left: 0.25rem;
`
const LinkBox = styled.div`
  padding: 0 2.75rem;
`
const Text = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  letter-spacing: -0.02rem;
`
