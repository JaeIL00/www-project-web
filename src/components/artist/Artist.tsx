import React from 'react'
import { useArtistListQuery } from '../../api/UseApi'
import { ArtistListLayout } from '../../layout/artist/ArtistListLayout'

export const Artist = () => {
  const { data } = useArtistListQuery()
  return <ArtistListLayout />
}
