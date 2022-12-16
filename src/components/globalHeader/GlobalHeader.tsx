import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
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

  const [active, setActive] = useState('')
  const { pathname } = useLocation()
  useMemo(() => {
    setActive(pathname.split('/')[1])
  }, [pathname.split('/')[1]])

  return (
    <div style={{ position: 'relative', zIndex: '9999' }}>
      <HomeClickBanner />
      <GlobalHeaderLayout urlPath={urlPath} active={active} />
    </div>
  )
}
