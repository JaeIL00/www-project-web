import React from 'react'
import { Outlet } from 'react-router-dom'

export const ArtworkPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Outlet />
    </div>
  )
}
