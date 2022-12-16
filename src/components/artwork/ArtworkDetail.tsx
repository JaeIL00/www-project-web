import React, { useMemo, useState } from 'react'
import { ArtworkDetailLayout } from '../../layout/artwork/ArtworkDetailLayout'
import { useArtworkDetailQuery } from '../../api/UseApi'
import { useParams } from 'react-router-dom'

export interface DetailTypes {
  title: string
  description: string
  artist: {
    id: number
    genre: string
    nickname: string
    profileImage: string
  }
  assets: [
    {
      genre: string
      type: string
      url: string
      isMain: boolean
    }
  ]
}
export interface AssetTypes {
  genre: string
  type: string
  url: string
  isMain: boolean
}

export const ArtworkDetail = () => {
  const { artistId } = useParams()
  const { data } = useArtworkDetailQuery(artistId)
  const [detail, setDetail] = useState<DetailTypes>({
    title: '',
    description: '',
    artist: {
      id: 0,
      genre: '',
      nickname: '',
      profileImage: ''
    },
    assets: [
      {
        genre: '',
        type: '',
        url: '',
        isMain: false
      }
    ]
  })

  const [assets, setAssets] = useState<AssetTypes[]>([
    {
      genre: '',
      type: '',
      url: '',
      isMain: false
    }
  ])
  const assetsHandler = (detail: DetailTypes) => {
    const assets = detail.assets
    const main = assets.find((item) => item.isMain) as AssetTypes
    setAssets([main, ...assets.filter((item) => !item.isMain)])
  }

  useMemo(() => {
    if (data) {
      setDetail(data.data)
      assetsHandler(data.data)
    }
  }, [data])

  return <ArtworkDetailLayout detail={detail} assets={assets} />
}
