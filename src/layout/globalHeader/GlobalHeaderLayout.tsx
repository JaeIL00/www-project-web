import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/* eslint-disable */
interface GlobalHeaderProps {
  urlPath: {
    path: string
    title: string
  }[]
  active: string
}
/* eslint-enable */

export const GlobalHeaderLayout = ({ urlPath, active }: GlobalHeaderProps) => {
  return (
    <HeaderContainer>
      {urlPath.map(({ path, title }) => (
        <LinkText
          key={title}
          to={path}
          color={path.split('/')[1] === active ? 'var(--main1-lightBlue)' : 'var(--white)'}
        >
          {title}
        </LinkText>
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
const LinkText = styled(Link)`
  color: ${({ color }) => color};
`
