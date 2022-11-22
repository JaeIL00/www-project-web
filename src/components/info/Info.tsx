import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { InfoFooterLayout } from '../../layout/info/InfoFooterLayout'
import { InfoHeaderLayout } from '../../layout/info/InfoHeaderLayout'

export const Info = () => {
  const urlPath = [
    {
      path: '',
      title: 'www'
    },
    {
      path: 'how',
      title: 'HOW'
    },
    {
      path: 'credit',
      title: 'CREDIT'
    },
    {
      path: 'font',
      title: 'FONT'
    }
  ]

  return (
    <>
      <Background>
        <InfoHeaderLayout urlPath={urlPath} />
        <Outlet />
      </Background>
      <InfoFooterLayout />
    </>
  )
}

const Background = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 53, 244, 0.1) 100%);
  height: calc(100vh - 6.24rem);
`
