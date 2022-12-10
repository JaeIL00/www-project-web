import React from 'react'
import { useArtistListQuery } from '../../api/UseApi'
import { ArtistListLayout } from '../../layout/artist/ArtistListLayout'

export const ArtistList = () => {
  const { data } = useArtistListQuery()
  return <ArtistListLayout />
}
