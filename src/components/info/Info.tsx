import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { InfoCreditLayout } from '../../layout/info/InfoCreditLayout'
import { InfoFontLayout } from '../../layout/info/InfoFontLayout'
import { InfoHeaderLayout } from '../../layout/info/InfoHeaderLayout'
import { InfoHowLayout } from '../../layout/info/InfoHowLayout'
import { InfowwwLayout } from '../../layout/info/InfowwwLayout'

export const Info = () => {
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
    <Background>
      <InfoHeaderLayout textColor={textColor} textColorHandler={textColorHandler} />
      <Routes>
        <Route path="/www" element={<InfowwwLayout />} />
        <Route path="/how" element={<InfoHowLayout />} />
        <Route path="/credit" element={<InfoCreditLayout />} />
        <Route path="/font" element={<InfoFontLayout />} />
      </Routes>
    </Background>
  )
}

const Background = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 53, 244, 0.1) 100%);
  height: calc(100vh - 6.24rem);
`
