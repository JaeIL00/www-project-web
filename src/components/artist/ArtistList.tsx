import React, { useEffect, useState } from 'react'
import { useArtistListQuery } from '../../api/UseApi'
import { ArtistListLayout } from '../../layout/artist/ArtistListLayout'

export interface ArtistTypes {
  id: number
  genre: string
  nickname: string
  profileImage: string
}

export const ArtistList = () => {
  const { data } = useArtistListQuery()
  const [allArtist, setAllArtist] = useState<ArtistTypes[]>([
    {
      id: 0,
      genre: '',
      nickname: '',
      profileImage: ''
    }
  ])
  useEffect(() => {
    if (data) setAllArtist(data.data)
  }, [data])

  return <ArtistListLayout allArtist={allArtist} />
}
