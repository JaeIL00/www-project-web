import React, { useEffect, useState } from 'react'
import { ArtworkHeaderLayout } from '../../layout/artwork/ArtworkHeaderLayout'
import { ArtworkListLayout } from '../../layout/artwork/ArtworkListLayout'
import { getImagePercent } from '../../store/ArtData'
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
export interface dataPro {
  calcImgPositionX: number
  calcImgPositionY: number
  eventElement: null | HTMLDivElement
  eventzIndex: number
}

export const ArtworkList = () => {
  const dispatch = useAppDispatch()
  const { resArtwork, artworkPercentage } = useAppSelector((state) => state.artData)
  const [size, setSize] = useState<string[]>([])
  const [filter, setFilter] = useState<boolean[]>([])
  useEffect(() => {
    if (resArtwork[0].url && !artworkPercentage[0]) {
      for (let i = 0; i < resArtwork.length; i++) {
        setFilter((prev) => [...prev, false])
        const img = new Image()
        img.src = resArtwork[i].url
        setTimeout(() => {
          if (img.width !== 0) {
            setSize((prev) => [...prev, img.width + 'px'])
          }
        }, 1000)
      }
    }
  }, [resArtwork])

  const done = () => {
    for (let i = 0; i < size.length; i++) {
      switch (true) {
        case parseInt(size[i]) < 1200:
          dispatch(getImagePercent('7'))
          break
        case parseInt(size[i]) < 2000:
          dispatch(getImagePercent('8'))
          break
        case parseInt(size[i]) < 3000:
          dispatch(getImagePercent('8'))
          break
        case parseInt(size[i]) < 4000:
          dispatch(getImagePercent('7'))
          break
        case parseInt(size[i]) < 5000:
          dispatch(getImagePercent('5'))
          break
        case parseInt(size[i]) < 6000:
          dispatch(getImagePercent('6'))
          break
        case parseInt(size[i]) < 7000:
          dispatch(getImagePercent('6'))
          break
        default:
          dispatch(getImagePercent('9'))
          break
      }
    }
  }
  useEffect(() => {
    if (size.length === resArtwork.length && !artworkPercentage[0]) done()
  }, [size])

  const [filterImg, setFilterImg] = useState('all')
  const filterHandler = (filterGenre: string) => {
    const indexArray = [] as number[]
    resArtwork.forEach((item: ArtworkTypes, index: number) => {
      if (item.genre === filterGenre) indexArray.push(index)
      else
        setFilter((prev) => {
          const next = prev.map((item) => (item = false))
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

  const [eventData, setEventData] = useState<dataPro>({
    calcImgPositionX: 0,
    calcImgPositionY: 0,
    eventElement: null,
    eventzIndex: 0
  })

  const getLeft = (target: HTMLDivElement) => {
    return parseInt(target.style.left.replace('vw', ''))
  }
  const getTop = (target: HTMLDivElement) => {
    return parseInt(target.style.top.replace('vh', ''))
  }
  // 드래그를 시작하는 함수
  const startDrag = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.currentTarget
    const x = getLeft(target) - (event.clientX / window.innerWidth) * 100
    const y = getTop(target) - (event.clientY / window.innerHeight) * 100
    target.style.zIndex = eventData.eventzIndex + 1 + ''
    setEventData((prev) => ({
      calcImgPositionX: x,
      calcImgPositionY: y,
      eventElement: target,
      eventzIndex: prev.eventzIndex + 1
    }))
  }

  useEffect(() => {
    if (window.event) {
      document.onmousemove = moveDrag
      document.onmouseup = stopDrag
      if (window.event.preventDefault) window.event.preventDefault()
    }
  }, [eventData])

  const moveDrag = (event: MouseEvent) => {
    if (eventData.eventElement) {
      const dmvx = (event.clientX / window.innerWidth) * 100 + eventData.calcImgPositionX
      const dmvy = (event.clientY / window.innerHeight) * 100 + eventData.calcImgPositionY
      eventData.eventElement.style.left = dmvx + 'vw'
      eventData.eventElement.style.top = dmvy + 'vh'
    }
  }

  const stopDrag = () => {
    document.onmousemove = null
    document.onmouseup = null
  }

  return (
    <div style={{ position: 'relative' }}>
      <ArtworkListLayout
        artwork={resArtwork}
        percentage={artworkPercentage}
        filter={filter}
        filterImg={filterImg}
        startDrag={startDrag}
      />
      <ArtworkHeaderLayout filterHandler={filterHandler} filterImg={filterImg} />
    </div>
  )
}
