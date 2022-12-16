import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArtworkTypes } from '../../components/artwork/ArtworkList'
import { position } from '../../components/artwork/ArtworkPosition'

interface ArtworkListLayoutProps {
  artwork: ArtworkTypes[]
  percentage: string[]
  filter: boolean[]
  filterImg: string
}

export const ArtworkListLayout = ({ artwork, percentage, filter, filterImg }: ArtworkListLayoutProps) => {
  const navigate = useNavigate()
  interface dataPro {
    calcImgPositionX: number
    calcImgPositionY: number
    eventElement: null | HTMLDivElement
    eventzIndex: number
  }
  const [eventData, setEventData] = useState<dataPro>({
    calcImgPositionX: 0,
    calcImgPositionY: 0,
    eventElement: null,
    eventzIndex: 0
  })

  function getLeft(target: HTMLDivElement) {
    return parseInt(target.style.left.replace('vw', ''))
  }
  function getTop(target: HTMLDivElement) {
    return parseInt(target.style.top.replace('vh', ''))
  }
  // 드래그를 시작하는 함수
  function startDrag(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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

  function moveDrag(event: MouseEvent) {
    if (eventData.eventElement) {
      const dmvx = (event.clientX / window.innerWidth) * 100 + eventData.calcImgPositionX
      const dmvy = (event.clientY / window.innerHeight) * 100 + eventData.calcImgPositionY
      eventData.eventElement.style.left = dmvx + 'vw'
      eventData.eventElement.style.top = dmvy + 'vh'
    }
  }

  function stopDrag() {
    document.onmousemove = null
    document.onmouseup = null
  }

  return (
    <Contain>
      <Bluebox></Bluebox>
      {filterImg === 'all' ? <img src="/assets/logo.svg" alt="로고 이미지" style={{ width: '23.8vw' }} /> : null}
      {filterImg === 'visual' ? (
        <img
          src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/3D/vidual+icon2.png"
          alt="로고 이미지"
          style={{ width: '23.8vw' }}
        />
      ) : null}
      {filterImg === 'media' ? (
        <img
          src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/3D/media+icon.png"
          alt="로고 이미지"
          style={{ width: '23.8vw' }}
        />
      ) : null}
      {filterImg === 'living' ? (
        <img
          src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/3D/living+icon.png"
          alt="로고 이미지"
          style={{ width: '23.8vw' }}
        />
      ) : null}
      {filterImg === 'fashion' ? (
        <img
          src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/3D/fashion+icon2.png"
          alt="로고 이미지"
          style={{ width: '23.8vw' }}
        />
      ) : null}
      <Bluebox></Bluebox>
      <Guide>작가의 작품을 보려면 더블클릭 하세요!</Guide>
      {percentage[0] ? (
        <>
          {artwork.map(({ url, artist }, index) => (
            <Imagebox
              key={artist.id}
              precent={percentage[index]}
              style={{ left: `${position[index].x1}`, top: `${position[index].y1}` }}
              onMouseDown={(event) => startDrag(event)}
              onDoubleClick={() => navigate(artist.id + '')}
            >
              <Image src={url} alt="" precent={percentage[index]} />
              <Screen backColor={filter[index] ? 'var(--main1-lightBlue)' : 'none'}></Screen>
            </Imagebox>
          ))}
        </>
      ) : null}
    </Contain>
  )
}

interface StyleTypes {
  precent?: string
  backColor?: string
}

const Contain = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 53, 244, 0.1) 100%);
  width: 90.8vw;
  height: calc(100vh - 6.24rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 4.6vw;
  overflow: hidden;
`
const Bluebox = styled.div`
  background-color: var(--main1-blue);
  width: 1vw;
  height: 1vw;
`
const Guide = styled.span`
  position: absolute;
  bottom: 2vw;
  right: 3vw;
  font-size: 0.8vw;
  opacity: 0.6;
`
const Imagebox = styled.div<StyleTypes>`
  width: ${({ precent }) => precent + 'vw'};
  position: absolute;
  cursor: pointer;
`
const Image = styled.img<StyleTypes>`
  width: ${({ precent }) => precent + 'vw'};
`
const Screen = styled.div<StyleTypes>`
  background-color: ${({ backColor }) => backColor};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`
