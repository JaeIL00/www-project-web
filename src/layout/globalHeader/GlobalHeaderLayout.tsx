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
  setActive: React.Dispatch<React.SetStateAction<string>>
}
/* eslint-enable */

export const GlobalHeaderLayout = ({ urlPath, active, setActive }: GlobalHeaderProps) => {
  return (
    <HeaderContainer>
      {urlPath.map((item) => (
        <Link key={item.title} to={item.path} onClick={() => setActive(item.title)}>
          <Text color={item.title === active ? '#5D6DFF' : '#fff'}>{item.title}</Text>
        </Link>
      ))}
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
