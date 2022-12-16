import React, { useEffect, useState } from 'react'
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
import { ArtistList } from './components/artist/ArtistList'
import { ArtistDetail } from './components/artist/ArtistDetail'
import { ComingSoon } from './components/common/ComingSoon'
import { isMobile } from 'react-device-detect'
import { useArtistListQuery, useArtworktListQuery } from './api/UseApi'
import { ArtworkList } from './components/artwork/ArtworkList'
import { ArtworkDetail } from './components/artwork/ArtworkDetail'
import { useAppDispatch } from './store/Store'
import { getArtworkReponse } from './store/ArtData'

const App = () => {
  if (isMobile) window.location.href = 'https://m.wwweb.kr'

  const dispatch = useAppDispatch()
  const { data: artist } = useArtistListQuery()
  const { data: artwork } = useArtworktListQuery()
  useEffect(() => {
    if (artist && artwork) dispatch(getArtworkReponse([artwork.data, artist.data]))
  }, [artist, artwork])
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 4000)
  const [render, setRender] = useState(false)
  setTimeout(() => {
    setRender(true)
  }, 3950)

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
        <Route path="/artwork" element={<ArtworkPage />}>
          <Route index element={<ArtworkList />} />
          <Route path=":artistId" element={<ArtworkDetail />} />
        </Route>
        <Route path="/artist" element={<ArtistPage />}>
          <Route index element={<ArtistList />} />
          <Route path=":artistId" element={<ArtistDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
