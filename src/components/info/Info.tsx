import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { InfoFooterLayout } from '../../layout/info/InfoFooterLayout'
import { InfoHeaderLayout } from '../../layout/info/InfoHeaderLayout'

export const Info = () => {
  // 텍스트 색 초기 값 설정
  const { pathname } = useLocation()
  useEffect(() => {
    const page = pathname.slice(6)
    textColorHandler(page)
  }, [])
  // 헤더 텍스트 컬러 변경
  const [textColor, setTextColor] = useState([true, false, false, false])
  const textColorHandler = (page: string) => {
    /* eslint-disable */
    switch (page) {
      case 'www':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[0] = true
          return next
        })
        break
      case 'how':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[1] = true
          return next
        })
        break
      case 'credit':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[2] = true
          return next
        })
        break
      case 'font':
        setTextColor((prev) => {
          const next = prev.map((item) => (item = false))
          next[3] = true
          return next
        })
        break
      default:
        return
    }
    /* eslint-enable */
  }
  return (
    <>
      <Background>
        <InfoHeaderLayout textColor={textColor} textColorHandler={textColorHandler} />
        <Outlet />
      </Background>
      <InfoFooterLayout />
    </>
  )
}

const Background = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 53, 244, 0.1) 100%);
  height: calc(100vh - 6.24rem);
`
