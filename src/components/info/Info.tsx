import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { InfoCreditLayout } from '../../layout/info/InfoCreditLayout'
import { InfoFontLayout } from '../../layout/info/InfoFontLayout'
import { InfoHowLayout } from '../../layout/info/InfoHowLayout'
import { InfowwwLayout } from '../../layout/info/InfowwwLayout'

export const Info = () => {
  return (
    <Routes>
      <Route path="/www" element={<InfowwwLayout />} />
      <Route path="/how" element={<InfoHowLayout />} />
      <Route path="/credit" element={<InfoCreditLayout />} />
      <Route path="/font" element={<InfoFontLayout />} />
    </Routes>
  )
}
