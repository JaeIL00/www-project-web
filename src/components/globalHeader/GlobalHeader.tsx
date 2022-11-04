import React, { useState } from 'react'
import { GlobalHeaderLayout } from '../../layout/globalHeader/GlobalHeaderLayout'
import { HomeClickBanner } from '../../layout/globalHeader/HomeClickBanner'

export const GlobalHeader = () => {
  const [textColor, setTextColor] = useState([false, false, false])

  const textColorHandler = (page: string) => {
    /* eslint-disable */
    switch (page) {
      case 'info' || '/info':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[0] = true
          return next
        })
        break
      case 'artwork' || '/artwork':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[1] = true
          return next
        })
        break
      case 'artist' || '/artist':
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
