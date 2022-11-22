import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

/* eslint-disable */
interface GlobalHeaderProps {
  urlPath: {
    path: string
    title: string
  }[]
}
/* eslint-enable */

export const GlobalHeaderLayout = ({ urlPath }: GlobalHeaderProps) => {
  return (
    <HeaderContainer>
      {urlPath.map(({ path, title }) => (
        <NavLink
          key={title}
          to={path}
          style={({ isActive }) => ({
            color: isActive ? 'var(--main1-lightBlue)' : 'var(--white)'
          })}
        >
          {title}
        </NavLink>
      ))}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: var(--black-300);
  height: 3.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.12rem;
`
