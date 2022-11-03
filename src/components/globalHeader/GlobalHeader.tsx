import React, { useState } from 'react'
import { GlobalHeaderLayout } from '../../layout/globalHeader/GlobalHeaderLayout'
import { HomeClickBanner } from '../../layout/globalHeader/HomeClickBanner'

export const GlobalHeader = () => {
  const [isInfo, setIsInfo] = useState(false)
  const [isArtwork, setIsArtwork] = useState(false)
  const [isArtist, setIsArtist] = useState(false)

  const textColorHandler = (page: string) => {
    switch (page) {
      case 'info':
        setIsInfo(true)
        setIsArtwork(false)
        setIsArtist(false)
        break
      case 'artwork':
        setIsInfo(false)
        setIsArtwork(true)
        setIsArtist(false)
        break
      case 'artist':
        setIsInfo(false)
        setIsArtwork(false)
        setIsArtist(true)
        break
      default:
        setIsInfo(false)
        setIsArtwork(false)
        setIsArtist(false)
    }
  }

  return (
    <>
      <HomeClickBanner textColorHandler={textColorHandler} />
      <GlobalHeaderLayout
        isInfo={isInfo}
        isArtwork={isArtwork}
        isArtist={isArtist}
        textColorHandler={textColorHandler}
      />
    </>
  )
}
