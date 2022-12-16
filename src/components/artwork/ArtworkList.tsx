import React, { useEffect, useState } from 'react'
import { useArtworktListQuery } from '../../api/UseApi'
import { ArtworkListLayout } from '../../layout/artwork/ArtworkListLayout'
import { getImagePercent } from '../../store/Artwork'
import { useAppDispatch, useAppSelector } from '../../store/Store'

export interface ArtworkTypes {
  genre: string
  type: string
  url: string
  isMain: boolean
}

export const ArtworkList = () => {
  const { data } = useArtworktListQuery()
  const [artwork, setArtwork] = useState<ArtworkTypes[]>([
    {
      genre: '',
      type: '',
      url: '',
      isMain: false
    }
  ])

  const { percentage } = useAppSelector((state) => state.artwork)
  const dispatch = useAppDispatch()
  const [size, setSize] = useState<string[]>([])

  useEffect(() => {
    if (data) setArtwork(data.data)
  }, [data])
  useEffect(() => {
    if (artwork[0].url && !percentage[0]) {
      for (let i = 0; i < artwork.length; i++) {
        const img = new Image()
        img.src = artwork[i].url
        setTimeout(() => {
          if (img.width !== 0) {
            setSize((prev) => [...prev, img.width + 'px'])
          }
        }, 2000)
      }
    }
  }, [artwork])

  const done = () => {
    for (let i = 0; i < size.length; i++) {
      switch (true) {
        case parseInt(size[i]) < 1200:
          dispatch(getImagePercent('8'))
          break
        case parseInt(size[i]) < 2000:
          dispatch(getImagePercent('9'))
          break
        case parseInt(size[i]) < 3000:
          dispatch(getImagePercent('9'))
          break
        case parseInt(size[i]) < 4000:
          dispatch(getImagePercent('8'))
          break
        case parseInt(size[i]) < 5000:
          dispatch(getImagePercent('6'))
          break
        case parseInt(size[i]) < 6000:
          dispatch(getImagePercent('6'))
          break
        case parseInt(size[i]) < 7000:
          dispatch(getImagePercent('7'))
          break
        default:
          dispatch(getImagePercent('10'))
          break
      }
    }
  }
  useEffect(() => {
    if (size.length === artwork.length) done()
  }, [size])

  return <ArtworkListLayout artwork={artwork} percentage={percentage} />
}
