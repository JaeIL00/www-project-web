import React from 'react'
import { Home } from '../components/home/Home'
import { LoadingLayout } from '../layout/LoadingLayout'

interface HomeProps {
  loading: boolean
  render: boolean
}

export const HomePage = ({ loading, render }: HomeProps) => {
  return (
    <div style={{ position: 'relative' }}>
      {loading ? <LoadingLayout /> : null}
      {render ? <Home /> : null}
    </div>
  )
}
