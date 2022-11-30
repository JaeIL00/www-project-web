import React, { useState } from 'react'
import { GlobalHeaderLayout } from '../../layout/globalHeader/GlobalHeaderLayout'
import { HomeClickBanner } from '../../layout/globalHeader/HomeClickBanner'

export const GlobalHeader = () => {
  const urlPath = [
    {
      path: '/www/',
      title: 'INFO'
    },
    {
      path: '/artwork/',
      title: 'ARTWORK'
    },
    {
      path: '/artist/',
      title: 'ARTIST'
    }
  ]

  const [active, setActive] = useState('main')

  return (
    <>
      <HomeClickBanner />
      <GlobalHeaderLayout urlPath={urlPath} active={active} setActive={setActive} />
    </>
  )
}
