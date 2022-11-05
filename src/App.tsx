import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalHeader } from './components/globalHeader/GlobalHeader'
import { ArtistPage } from './pages/ArtistPage'
import { ArtworkPage } from './pages/ArtworkPage'
import { InfoPage } from './pages/InfoPage'
import { MainPage } from './pages/MainPage'

const App = () => {
  return (
    <>
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/artwork" element={<ArtworkPage />} />
        <Route path="/artist" element={<ArtistPage />} />
      </Routes>
    </>
  )
}

export default App
