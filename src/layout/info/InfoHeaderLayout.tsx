import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface InfoHeaderProps {
  urlPath: {
    path: string
    title: string
  }[]
  active: string
  setActive: React.Dispatch<React.SetStateAction<string>>
}

export const InfoHeaderLayout = ({ urlPath, active, setActive }: InfoHeaderProps) => {
  return (
    <HeaderContainer>
      {urlPath.map((item) => (
        <LinkBox key={item.title}>
          <Text
            to={item.path}
            color={item.title === active ? 'var(--main2-green)' : 'var(--black-300)'}
            onClick={() => setActive(item.title)}
          >
            {item.title}
          </Text>
        </LinkBox>
      ))}
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
