import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalHeader } from './components/globalHeader/GlobalHeader'
import { ArtistPage } from './pages/ArtistPage'
import { ArtworkPage } from './pages/ArtworkPage'
import { InfoPage } from './pages/InfoPage'
import { MainPage } from './pages/MainPage'
import { InfoHowLayout } from './layout/info/InfoHowLayout'
import { InfowwwLayout } from './layout/info/InfowwwLayout'
import { InfoCreditLayout } from './layout/info/InfoCreditLayout'
import { InfoFontLayout } from './layout/info/InfoFontLayout'

const App = () => {
  return (
    <>
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
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
