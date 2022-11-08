import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalHeaderLayout } from '../../layout/globalHeader/GlobalHeaderLayout'
import { HomeClickBanner } from '../../layout/globalHeader/HomeClickBanner'

export const GlobalHeader = () => {
  const [textColor, setTextColor] = useState([false, false, false])
  const { pathname } = useLocation()
  useEffect(() => {
    const page = pathname.split('/')
    textColorHandler(page[1])
  }, [])

  const textColorHandler = (page: string) => {
    /* eslint-disable */
    switch (page) {
      case 'info':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[0] = true
          return next
        })
        break
      case 'artwork':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[1] = true
          return next
        })
        break
      case 'artist':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[2] = true
          return next
        })
        break
      default:
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          return next
        })
    }
    /* eslint-enable */
  }

  return (
    <>
      <HomeClickBanner textColorHandler={textColorHandler} />
      <GlobalHeaderLayout textColor={textColor} textColorHandler={textColorHandler} />
    </>
  )
}
