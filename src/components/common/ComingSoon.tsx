import React, { useEffect, useRef, useState } from 'react'
import logoGray from '/assets/logo-gray.svg'
import useInterval from '../hooks/useInterval'
import { ComingSoonLayout } from '../../layout/common/ComingSoonLayout'

interface motionDataTypes {
  calcImgPositionX: number
  calcImgPositionY: number
  eventElement: null | HTMLImageElement
  eventzIndex: number
}

export const ComingSoon = () => {
  const [isRunning, setIsRunning] = useState(true)
  const delay = 1000
  const interactive = useRef() as React.RefObject<HTMLDivElement>
  const box = useRef() as React.RefObject<HTMLDivElement>

  const imageHandler = () => {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const element = document.createElement('img')
    element.src = logoGray
    element.style.position = 'absolute'
    element.style.left = Math.floor(Math.random() * viewportWidth) + 'px'
    element.style.top = Math.floor(Math.random() * viewportHeight) + 'px'
    element.style.animation = 'create-img 2s ease-in'
    element.onmousedown = (event) => startDrag(event)
    interactive.current?.appendChild(element)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsRunning(false)
    }, 60000)
  }, [])

  useInterval(imageHandler, isRunning ? delay : null)

  function getLeft(target: HTMLImageElement) {
    return parseInt(target.style.left.replace('px', ''))
  }
  function getTop(target: HTMLImageElement) {
    return parseInt(target.style.top.replace('px', ''))
  }

  const [eventData, setEventData] = useState<motionDataTypes>({
    calcImgPositionX: 0,
    calcImgPositionY: 0,
    eventElement: null,
    eventzIndex: 0
  })
  // 드래그를 시작하는 함수 입니다.
  function startDrag(event: MouseEvent) {
    setSizeUp(true)
    // 이미지 xy값과 마우스이벤트 xy값의 차 값을 구한다
    const target = event.currentTarget as HTMLImageElement
    const x = getLeft(target) - event.clientX
    const y = getTop(target) - event.clientY
    // 이벤트 이미지가 상단으로 올라오도록
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

  function moveDrag(event: MouseEvent) {
    if (eventData.eventElement) {
      const dmvx = event.clientX + eventData.calcImgPositionX
      const dmvy = event.clientY + eventData.calcImgPositionY
      eventData.eventElement.style.left = dmvx + 'px'
      eventData.eventElement.style.top = dmvy + 'px'
    }
  }

  // 드래그를 정지하는 함수 입니다.
  function stopDrag() {
    document.onmousemove = null
    document.onmouseup = null
    setSizeUp(false)
  }
  const [sizeUp, setSizeUp] = useState(false)
  const [gameWidth, setGameWidth] = useState('calc(100vw * 8.43 / 100)')
  const [percentSize, setPercentSize] = useState(8.43)
  const [limit, setLimit] = useState(0)
  const [intro, setIntro] = useState(false)
  const [endVideo, setEndVideo] = useState(false)

  useEffect(() => {
    if (limit >= 100) {
      setGameWidth(() => {
        return `calc(100vw * 1300 / 100)`
      })
      setIsRunning(false)
      setTimeout(() => {
        setIntro(true)
      }, 2000)
    }
  }, [gameWidth])
  return (
    <ComingSoonLayout
      intro={intro}
      endVideo={endVideo}
      setEndVideo={setEndVideo}
      box={box}
      interactive={interactive}
      limit={limit}
      sizeUp={sizeUp}
      gameWidth={gameWidth}
      setGameWidth={setGameWidth}
      percentSize={percentSize}
      setPercentSize={setPercentSize}
      setLimit={setLimit}
    />
  )
}
