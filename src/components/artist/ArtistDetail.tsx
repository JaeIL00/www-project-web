import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useArtistDetailQuery } from '../../api/UseApi'
import { ArtistDetailLayout } from '../../layout/artist/ArtistDetailLayout'
import { useAppSelector } from '../../store/Store'

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

  const { isCopyState } = useAppSelector((state) => state.info)
  const [whatCopy, setWhatCopy] = useState('')

  return <ArtistDetailLayout detail={detail} whatCopy={whatCopy} isCopy={isCopyState} setWhatCopy={setWhatCopy} />
}
