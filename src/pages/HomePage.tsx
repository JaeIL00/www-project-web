import React, { useState } from 'react'
import { Home } from '../components/home/Home'
import { HomeLoadingLayout } from '../layout/home/HomeLoadingLayout'

export const HomePage = () => {
  const [loading, setLoading] = useState(true)

  return <div style={{ position: 'relative' }}>{loading ? <HomeLoadingLayout /> : <Home />}</div>
}
