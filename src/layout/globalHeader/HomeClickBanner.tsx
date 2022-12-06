import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeClickBanner = () => {
  return (
    <BannerLink to="/">
      <Textbox1>
        <Text>
          main home click here! wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww &nbsp;
        </Text>
        <Text>
          main home click here! wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww &nbsp;
        </Text>
      </Textbox1>
      <Textbox2>
        <Text>
          main home click here! wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww &nbsp;
        </Text>
        <Text>
          main home click here! wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww &nbsp;
        </Text>
      </Textbox2>
    </BannerLink>
  )
}

const BannerLink = styled(Link)`
  background-color: var(--main1-blue);
  display: flex;
  overflow: hidden;
  height: 3.12rem;

  @keyframes scrolling-left1 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes scrolling-left2 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`
const Textbox1 = styled.div`
  padding-top: 1.06rem;
  white-space: nowrap;

  animation: scrolling-left1 40s linear infinite;
`
const Textbox2 = styled.div`
  padding-top: 1.06rem;
  white-space: nowrap;

  animation: scrolling-left2 40s linear infinite;
  animation-delay: 20s;
`
const Text = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: var(--white);
`
