import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeClickBanner = () => {
  return (
    <BannerLink to="/">
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
    </BannerLink>
  )
}

const BannerLink = styled(Link)`
  background-color: var(--main1-blue);
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
  color: var(--white);

  animation: marquee 40s linear infinite;
`
