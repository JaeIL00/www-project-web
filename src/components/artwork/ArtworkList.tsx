import React, { useEffect, useState } from 'react'
import { useArtworktListQuery } from '../../api/UseApi'
import { ArtworkHeaderLayout } from '../../layout/artwork/ArtworkHeaderLayout'
import { ArtworkListLayout } from '../../layout/artwork/ArtworkListLayout'
import { getImagePercent } from '../../store/Artwork'
import { useAppDispatch, useAppSelector } from '../../store/Store'

export interface ArtworkTypes {
  artist: {
    id: number
  }
  genre: string
  type: string
  url: string
  isMain: boolean
}

export const ArtworkList = () => {
  const { data } = useArtworktListQuery()
  const [artwork, setArtwork] = useState<ArtworkTypes[]>([
    {
      artist: {
        id: 0
      },
      genre: '',
      type: '',
      url: '',
      isMain: false
    }
  ])

  const dispatch = useAppDispatch()
  const { percentage } = useAppSelector((state) => state.artwork)
  const [size, setSize] = useState<string[]>([])
  const [filter, setFilter] = useState<boolean[]>([])

  useEffect(() => {
    if (data) setArtwork(data.data)
  }, [data])
  useEffect(() => {
    if (artwork[0].url && !percentage[0]) {
      for (let i = 0; i < artwork.length; i++) {
        setFilter((prev) => [...prev, false])
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

  const [filterImg, setFilterImg] = useState('all')
  const filterHandler = (filterGenre: string) => {
    const indexArray = [] as number[]
    artwork.forEach((item: ArtworkTypes, index: number) => {
      if (item.genre === filterGenre) indexArray.push(index)
      else
        setFilter((prev) => {
          const next = prev.map((item) => (item = false))
          // console.log(next)
          return next
        })
    })

    if (indexArray.length > 1) {
      setFilter((prev) => {
        const next = prev.map((item) => (item = true))
        for (let i = 0; i < indexArray.length; i++) {
          next.splice(indexArray[i], 1, false)
        }
        return next
      })
    }
    setFilterImg(filterGenre)
  }

  return (
    <div style={{ position: 'relative' }}>
      <ArtworkListLayout artwork={artwork} percentage={percentage} filter={filter} filterImg={filterImg} />
      <ArtworkHeaderLayout filterHandler={filterHandler} />
    </div>
  )
}
