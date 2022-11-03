import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Info } from '../components/info/Info'

export const InfoPage = () => {
  const { pathname } = useLocation()
  if (pathname === '/info' || pathname === '/info/') return <Navigate to="/info/www" />
  return <Info />
}
