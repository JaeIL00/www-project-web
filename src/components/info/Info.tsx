import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { InfoCreditLayout } from '../../layout/info/InfoCreditLayout'
import { InfoFontLayout } from '../../layout/info/InfoFontLayout'
import { InfoHowLayout } from '../../layout/info/InfoHowLayout'
import { InfowwwLayout } from '../../layout/info/InfowwwLayout'

export const Info = () => {
  return (
    <Background>
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
