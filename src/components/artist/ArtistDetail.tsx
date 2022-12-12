import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useArtistDetailQuery } from '../../api/UseApi'
import { ArtistDetailLayout } from '../../layout/artist/ArtistDetailLayout'

export interface ArtistDetailTypes {
  id: number
  genre: string
  name: string
  nickname: string
  email: string
  contact: string
  description: string
  bio: string
}

export const ArtistDetail = () => {
  const { artistId } = useParams()
  const { data } = useArtistDetailQuery(artistId)
  const [detail, setDetail] = useState<ArtistDetailTypes[]>([
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
    if (data) setDetail(data.data)
  }, [])
  return <ArtistDetailLayout detail={detail} />
}
