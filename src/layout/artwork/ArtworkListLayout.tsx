import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArtworkTypes } from '../../components/artwork/ArtworkList'

interface ArtworkListLayoutProps {
  artwork: ArtworkTypes[]
  percentage: string[]
}

export const ArtworkListLayout = ({ artwork, percentage }: ArtworkListLayoutProps) => {
  interface dataPro {
    calcImgPositionX: number
    calcImgPositionY: number
    eventElement: null | HTMLImageElement
    eventzIndex: number
  }
  const [eventData, setEventData] = useState<dataPro>({
    calcImgPositionX: 0,
    calcImgPositionY: 0,
    eventElement: null,
    eventzIndex: 0
  })
  // 이미지 초기 위치
  const position = [
    // 기괴 포스터
    {
      x1: '35.3vw',
      y1: '10.9vh'
    },
    // 빨간 고양이
    {
      x1: '45.1vw',
      y1: '4.6vh'
    },
    // 비닐 포스터
    {
      x1: '55.9vw',
      y1: '14.1vh'
    },
    // 보틀 패키지
    {
      x1: '79.1vw',
      y1: '37.1vh'
    },
    //해변가 일러스트
    {
      x1: '25vw',
      y1: '20.7vh'
    },
    // 소풍
    {
      x1: '56.1vw',
      y1: '54.6vh'
    },
    // 청바지
    {
      x1: '50.4vw',
      y1: '33.8vh'
    },
    // 서양모델
    {
      x1: '31.8vw',
      y1: '35.7vh'
    },
    // 페르소나
    {
      x1: '20.8vw',
      y1: '52.3vh'
    },
    // 놀이터
    {
      x1: '9.4vw',
      y1: '38.6vh'
    },
    // 보라 일러스트
    {
      x1: '45vw',
      y1: '68.9vh'
    },
    // 새로 꽃병
    {
      x1: '70vw',
      y1: '33.9vh'
    },
    // 가로 꽃병
    {
      x1: '40.4vw',
      y1: '55vh'
    },
    // 지갑
    {
      x1: '65.5vw',
      y1: '51.8vh'
    },
    // 보라 일러스트
    {
      x1: '59.3vw',
      y1: '32.5vh'
    },
    // 노란 일러스트
    {
      x1: '21vw',
      y1: '33.6vh'
    },
    // 칵테일 일러스트
    {
      x1: '42.1vw',
      y1: '29.4vh'
    },
    // 뚠뚠
    {
      x1: '76.1vw',
      y1: '51.8vh'
    },
    // 겹겹 포스터
    {
      x1: '31.5vw',
      y1: '57.5vh'
    },
    // 팝 일러스트
    {
      x1: '66.7vw',
      y1: '21.6vh'
    },
    {
      x1: '9px',
      y1: '27px'
    },
    {
      x1: '1200px',
      y1: '700px'
    },
    {
      x1: '1200px',
      y1: '700px'
    }
  ]

  function getLeft(target: HTMLImageElement) {
    return parseInt(target.style.left.replace('vw', ''))
  }
  function getTop(target: HTMLImageElement) {
    return parseInt(target.style.top.replace('vh', ''))
  }
  // 드래그를 시작하는 함수
  function startDrag(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
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
      <img src="/assets/logo.svg" alt="로고 이미지" style={{ width: '23.8vw' }} />
      <Bluebox></Bluebox>
      <Emptybox></Emptybox>
      {percentage[0] ? (
        <>
          {artwork.map(({ url }, index) => (
            <Imagee
              key={url}
              src={url}
              alt=""
              style={{ left: `${position[index].x1}`, top: `${position[index].y1}` }}
              precent={percentage[index]}
              onMouseDown={(event) => startDrag(event)}
            />
          ))}
        </>
      ) : null}
    </Contain>
  )
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
const Emptybox = styled.div`
  background-color: transparent;
  height: 100%;
  position: absolute;
  top: 0;
`
const Bluebox = styled.div`
  background-color: var(--main1-blue);
  width: 1vw;
  height: 1vw;
`
const Imagee = styled.img<{ precent: string }>`
  width: ${({ precent }) => precent + 'vw'};
  position: absolute;
  cursor: pointer;
`
