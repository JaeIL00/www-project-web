import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '/assets/logo.svg'
import logoGray from '/assets/logo-gray.svg'
import useInterval from '../../components/hooks/useInterval'

export const ComingSoon = () => {
  const [isRunning, setIsRunning] = useState(true)
  const delay = 3000
  const Interactive = useRef() as React.RefObject<HTMLDivElement>
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
    Interactive.current?.appendChild(element)
    checkingPosition(element.style.left, element.style.top)
  }

  const checkingPosition = (left: string, top: string) => {
    const positioning = {
      elemLeft: parseInt(left),
      elemTop: parseInt(top),
      clientRect: box.current?.getBoundingClientRect(),
      boxWidth: box.current?.offsetWidth as number,
      boxHeight: box.current?.offsetHeight as number
    }
    const relativeTop = positioning.clientRect?.top as number
    const relativeLeft = positioning.clientRect?.left as number
    const checkLeft =
      relativeLeft > positioning.elemLeft || positioning.elemLeft > relativeLeft + positioning.boxWidth
    const checkTop =
      relativeTop > positioning.elemTop || positioning.elemTop > relativeTop + positioning.boxHeight
    if (!checkLeft && !checkTop) imageHandler()
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
      // 초기 클릭한 위치값만으로 이미지 위치와 커서 위치의 차를 계산하고 이동할때마다 차이 값을 지속 적용
      // 실시간 커서 위치 값으로 차이를 계산하면 무의미한 계산이다.
      // 첫 클릭 당시 이미지위치값과의 차이값으로 지속적인 계산이 되어야한다.
      // 그런데 차이 값이 즉시 업데이트 되지 않는다.
      // 그래서 유즈이펙트를 사용한다.
      document.onmousemove = moveDrag
      document.onmouseup = stopDrag
      if (window.event.preventDefault) window.event.preventDefault()
    }
  }, [eventData])

  function moveDrag(event: MouseEvent) {
    if (eventData.eventElement) {
      // const imgName = eventData.eventElement.src.split('/')[4].split('.')[0]
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
    <div>
      {intro ? (
        <VContainer>
          {endVideo ? (
            <>
              <ComingsoonText>COMING SOON</ComingsoonText>
              <InfoText bottom="calc(100vw * 19.5 / 100)">2022 12.17 ~ 12.18</InfoText>
              <InfoText bottom="calc(100vw * 17.5 / 100)">성수 무브모브 카페 & 스튜디오</InfoText>
              <Button onClick={() => window.location.reload()}>back</Button>
            </>
          ) : null}
          <Video
            src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/video/www_motion_9.mp4"
            autoPlay
            muted
            onEnded={() => setTimeout(() => setEndVideo(true), 2000)}
          />
        </VContainer>
      ) : (
        <Container>
          <Interactivebox ref={Interactive}>
            <span style={{ position: 'absolute', margin: '1rem' }}>
              www를 잡아서 로고 이미지에 넣어주세요
            </span>
          </Interactivebox>
          <Loadingbox>
            <Bar width={limit + '%'} transition={limit >= 100 ? '6s' : '1s'}></Bar>
          </Loadingbox>
          <Contents ref={box}>
            <Image
              src={logo}
              alt="로고 이미지"
              onMouseUp={
                sizeUp
                  ? () => {
                      setGameWidth(() => {
                        return `calc(100vw * ${percentSize + 13} / 100)`
                      })
                      setPercentSize((prev) => prev + 13)
                      setLimit(percentSize + 20)
                    }
                  : () => {
                      return
                    }
              }
              width={gameWidth}
            />
            <strong style={{ fontSize: 'calc(100vw * 1.87 / 100)' }}>COMING SOON</strong>
            <br />
            <span style={{ fontSize: 'calc(100vw * 0.83 / 100)' }}>12/17 SAT OPEN</span>
          </Contents>
        </Container>
      )}
    </div>
  )
}

const VContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes ani {
    0% {
      background-color: var(--main1-blue);
    }
    100% {
      background: var(--black-400);
    }
  }
  @keyframes video-ani {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  animation: ani 2s linear forwards;
`
const ComingsoonText = styled.strong`
  position: absolute;
  bottom: calc(100vw * 26 / 100);
  font-size: calc(100vw * 4 / 100);
  color: var(--white);
`
const InfoText = styled.span<{ bottom: string }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  color: var(--white);
`
const Button = styled.button`
  background-color: transparent;
  position: absolute;
  bottom: calc(100vw * 4 / 100);
  color: var(--black-100);
  z-index: 9999;
`
const Video = styled.video`
  height: 100vh;
  animation: video-ani 4s ease-in;
`
const Container = styled.div`
  background: var(--background-white);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`
const Contents = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`
const Interactivebox = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  opacity: 0.2;
  overflow: hidden;

  @keyframes create-img {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`
const Image = styled.img<{ width: string }>`
  width: ${({ width }) => width};
  margin-bottom: calc(100vw * 2.62 / 100);
  transition: 1s;
`
const Loadingbox = styled.div`
  background-color: var(--sub-blue);
  width: calc(100vw * 90 / 100);
  height: 15px;
  display: flex;
  // justify-content: center;
  position: absolute;
  bottom: calc(100vh * 5 / 100);
  margin-top: calc(100vh * 4.75 / 100);
`
const Bar = styled.div<{ width: string; transition: string }>`
  background-color: var(--main1-blue);
  width: ${({ width }) => width};
  height: inherit;
  transition: ${({ transition }) => transition};
`
