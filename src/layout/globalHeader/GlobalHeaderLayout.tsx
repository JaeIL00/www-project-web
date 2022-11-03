import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const GlobalHeaderLayout = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Text>INFO</Text>
      </Link>
      <Link to="/">
        <Text>ARTWORK</Text>
      </Link>
      <Link to="/">
        <Text>ARTIST</Text>
      </Link>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: #242528;
  height: 3.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.12rem;
`
const Text = styled.span`
  color: #fff;
`
