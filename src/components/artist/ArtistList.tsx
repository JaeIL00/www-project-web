import React from 'react'
import { ArtistListLayout } from '../../layout/artist/ArtistListLayout'
import { useAppSelector } from '../../store/Store'

export interface ArtistTypes {
  id: number
  genre: string
  nickname: string
  profileImage: string
}

export const ArtistList = () => {
  const { resArtist } = useAppSelector((state) => state.artData)

  return <ArtistListLayout allArtist={resArtist} />
}
