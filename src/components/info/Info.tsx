import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
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
  const [active, setActive] = useState('www')

  const { pathname } = useLocation()
  useEffect(() => {
    const isWherePage = pathname.split('/')
    if (!isWherePage[2]) return setActive('www')
    setActive(isWherePage[2].toUpperCase())
  }, [])

  return (
    <>
      <Background>
        <InfoHeaderLayout urlPath={urlPath} active={active} setActive={setActive} />
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
