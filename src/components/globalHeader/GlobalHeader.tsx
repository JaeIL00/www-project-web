import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalHeaderLayout } from '../../layout/globalHeader/GlobalHeaderLayout'
import { HomeClickBanner } from '../../layout/globalHeader/HomeClickBanner'

export const GlobalHeader = () => {
  const urlPath = [
    {
      path: '/www',
      title: 'INFO'
    },
    {
      path: '/artwork',
      title: 'ARTWORK'
    },
    {
      path: '/artist',
      title: 'ARTIST'
    }
  ]
  const [active, setActive] = useState('MAIN')

  const { pathname } = useLocation()
  useEffect(() => {
    const isWherePage = pathname.split('/')
    if (isWherePage[1] === 'www') return setActive('INFO')
    setActive(isWherePage[1].toUpperCase())
  }, [])

  return (
    <>
      <HomeClickBanner setActive={setActive} />
      <GlobalHeaderLayout urlPath={urlPath} active={active} setActive={setActive} />
    </>
  )
}
