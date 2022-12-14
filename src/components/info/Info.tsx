import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { TextCopySnackLayout } from '../../layout/common/TextCopySnackLayout'
import { InfoFooterLayout } from '../../layout/info/InfoFooterLayout'
import { InfoHeaderLayout } from '../../layout/info/InfoHeaderLayout'
import { useAppSelector } from '../../store/Store'

export const Info = () => {
  const urlPath = [
    {
      path: '/',
      title: 'www'
    },
    {
      path: '/how',
      title: 'HOW'
    },
    {
      path: '/credit',
      title: 'CREDIT'
    },
    {
      path: '/font',
      title: 'FONT'
    }
  ]

  const { isCopyState } = useAppSelector((state) => state.info)
  useEffect(() => {
    setIsCopy(isCopyState)
  }, [isCopyState])
  const [isCopy, setIsCopy] = useState(false)

  return (
    <>
      <Background>
        <InfoHeaderLayout urlPath={urlPath} />
        <Outlet />
        <TextCopySnackLayout isCopy={isCopy} word="이메일을" />
      </Background>
      <InfoFooterLayout />
    </>
  )
}

const Background = styled.div`
  background: var(--background-white);
  min-height: calc(100vh - 6.24rem);
`
