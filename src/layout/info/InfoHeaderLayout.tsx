import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface InfoHeaderProps {
  urlPath: {
    path: string
    title: string
  }[]
}

export const InfoHeaderLayout = ({ urlPath }: InfoHeaderProps) => {
  return (
    <HeaderContainer>
      {urlPath.map(({ path, title }) => (
        <LinkBox key={title}>
          <NavLink
            to={`/www/${path}`}
            style={({ isActive }) => ({ color: isActive ? 'var(--main2-green)' : 'var(--black-300)' })}
          >
            {title}
          </NavLink>
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
