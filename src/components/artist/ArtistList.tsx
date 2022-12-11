import React, { useEffect, useState } from 'react'
import { useArtistListQuery } from '../../api/UseApi'
import { ArtistListLayout } from '../../layout/artist/ArtistListLayout'

export interface ArtistTypes {
  id: number
  genre: string
  name: string
  nickname: string
  email: string
  contact: string
  description: string
  bio: string
}

export const ArtistList = () => {
  const { data } = useArtistListQuery()
  const [allArtist, setAllArtist] = useState<ArtistTypes[]>([
    {
      id: 0,
      genre: '',
      name: '',
      nickname: '',
      email: '',
      contact: '',
      description: '',
      bio: ''
    }
  ])
  useEffect(() => {
    if (data) setAllArtist(data.data)
  }, [data])

  return <ArtistListLayout allArtist={allArtist} />
}
