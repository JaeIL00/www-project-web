import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/* eslint-disable */
interface GlobalHeaderProps {
  isInfo: boolean
  isArtwork: boolean
  isArtist: boolean
  textColorHandler: (page: string) => void
}
/* eslint-enable */

export const GlobalHeaderLayout = ({ isInfo, isArtwork, isArtist, textColorHandler }: GlobalHeaderProps) => {
  return (
    <HeaderContainer>
      <Link to="/info/www" onClick={() => textColorHandler('info')}>
        <Text color={isInfo ? '#5D6DFF' : '#fff'}>INFO</Text>
      </Link>
      <Link to="/artwork" onClick={() => textColorHandler('artwork')}>
        <Text color={isArtwork ? '#5D6DFF' : '#fff'}>ARTWORK</Text>
      </Link>
      <Link to="/artist" onClick={() => textColorHandler('artist')}>
        <Text color={isArtist ? '#5D6DFF' : '#fff'}>ARTIST</Text>
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
const Text = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`
