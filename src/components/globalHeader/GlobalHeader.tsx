import React from 'react'
import { GlobalHeaderLayout } from '../../layout/globalHeader/GlobalHeaderLayout'
import { HomeClickBanner } from '../../layout/globalHeader/HomeClickBanner'

export const GlobalHeader = () => {
  return (
    <>
      <HomeClickBanner />
      <GlobalHeaderLayout />
    </>
  )
}
