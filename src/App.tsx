import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalHeader } from './components/globalHeader/GlobalHeader'
import { ArtistPage } from './pages/ArtistPage'
import { ArtworkPage } from './pages/ArtworkPage'
import { InfoPage } from './pages/InfoPage'
import { HomePage } from './pages/HomePage'
import { InfoHowLayout } from './layout/info/InfoHowLayout'
import { InfowwwLayout } from './layout/info/InfowwwLayout'
import { InfoCreditLayout } from './layout/info/InfoCreditLayout'
import { InfoFontLayout } from './layout/info/InfoFontLayout'
import { ComingSoon } from './layout/ComingSoon'
import { isMobile } from 'react-device-detect'

const App = () => {
  if (isMobile) window.location.href = 'https://m.wwweb.kr'
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 4000)
  const [render, setRender] = useState(false)
  setTimeout(() => {
    setRender(true)
  }, 3990)

  return (
    // <ComingSoon />
    <>
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<HomePage loading={loading} render={render} />} />
        <Route path="/www" element={<InfoPage />}>
          <Route path="" element={<InfowwwLayout />} />
          <Route path="how" element={<InfoHowLayout />} />
          <Route path="credit" element={<InfoCreditLayout />} />
          <Route path="font" element={<InfoFontLayout />} />
        </Route>
        <Route path="/artwork" element={<ArtworkPage />} />
        <Route path="/artist" element={<ArtistPage />} />
      </Routes>
    </>
  )
}

export default App
