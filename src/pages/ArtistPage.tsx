import React from 'react'
import { Outlet } from 'react-router-dom'

export const ArtistPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Outlet />
    </div>
  )
}
