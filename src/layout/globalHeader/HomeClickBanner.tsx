import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/* eslint-disable */
interface GlobalHeaderProps {
  setActive: React.Dispatch<React.SetStateAction<string>>
}
/* eslint-enable */

export const HomeClickBanner = ({ setActive }: GlobalHeaderProps) => {
  return (
    <BannerContainer to="/" onClick={() => setActive('MAIN')}>
      <TextBox>
        <Text>
          &nbsp;wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww main home click here!
        </Text>
        <Text>
          &nbsp;wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww main home click here!
        </Text>
        <Text>
          &nbsp;wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww main home click here!
        </Text>
        <Text>
          &nbsp;wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww main home click here!
        </Text>
      </TextBox>
    </BannerContainer>
  )
}

const BannerContainer = styled(Link)`
  background-color: #1635f4;
  height: 3.12rem;
  display: block;
`
const TextBox = styled.div`
  display: flex;
  padding-top: 1.06rem;
  overflow: hidden;
  white-space: nowrap;

  @keyframes marquee {
    100% {
      transform: translateX(-200%);
    }
  }
`
const Text = styled.span`
  font-size: 1rem;
  color: #fff;

  animation: marquee 40s linear infinite;
`
