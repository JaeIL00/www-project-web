import React from 'react'
import { Outlet } from 'react-router-dom'

export const ArtworkPage = () => {
  return (
    <div style={{ height: ' 10px', position: 'relative' }}>
      <Outlet />
    </div>
  )
}
