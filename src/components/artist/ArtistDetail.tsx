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
  profileImage: string
  type: string
  linkTree: string
  assets: {
    genre: string
    isMain: boolean
    type: string
    url: string
  }[]
}

export const ArtistDetail = () => {
  const { artistId } = useParams()
  const { data } = useArtistDetailQuery(artistId)
  const [detail, setDetail] = useState<ArtistDetailTypes>({
    id: 0,
    genre: '',
    name: '',
    nickname: '',
    email: '',
    contact: '',
    description: '',
    bio: '',
    profileImage: '',
    type: '',
    linkTree: '',
    assets: [
      {
        genre: '',
        isMain: false,
        type: '',
        url: ''
      }
    ]
  })
  useEffect(() => {
    if (data) setDetail(data.data)
  }, [data])

  const [isCopy, setIsCopy] = useState(false)
  const shareHandler = () => {
    navigator.clipboard.writeText(window.location.href)
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 3000)
  }

  return <ArtistDetailLayout detail={detail} shareHandler={shareHandler} isCopy={isCopy} />
}
