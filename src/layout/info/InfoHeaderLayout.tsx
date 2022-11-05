import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/* eslint-disable */
interface InfoHeaderProps {
  textColor: boolean[]
  textColorHandler: (page: string) => void
}
/* eslint-enable */

export const InfoHeaderLayout = ({ textColor, textColorHandler }: InfoHeaderProps) => {
  return (
    <HeaderContainer>
      <LinkBox>
        <Text to="www" color={textColor[0] ? '#64E269' : '#242528'} onClick={() => textColorHandler('www')}>
          www
        </Text>
      </LinkBox>
      <LinkBox>
        <Text to="how" color={textColor[1] ? '#64E269' : '#242528'} onClick={() => textColorHandler('how')}>
          HOW
        </Text>
      </LinkBox>
      <LinkBox>
        <Text
          to="credit"
          color={textColor[2] ? '#64E269' : '#242528'}
          onClick={() => textColorHandler('credit')}
        >
          CREDIT
        </Text>
      </LinkBox>
      <LinkBox>
        <Text to="font" color={textColor[3] ? '#64E269' : '#242528'} onClick={() => textColorHandler('font')}>
          FONT
        </Text>
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
const Text = styled(Link)<{ color: string }>`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  letter-spacing: -0.02rem;
  color: ${({ color }) => color};
`
