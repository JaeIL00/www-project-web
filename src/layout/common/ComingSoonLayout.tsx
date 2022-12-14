import React from 'react'
import styled from 'styled-components'
import logo from '/assets/logo.svg'

interface ComingSoonLayoutProps {
  intro: boolean
  endVideo: boolean
  sizeUp: boolean
  limit: number
  percentSize: number
  gameWidth: string
  box: React.RefObject<HTMLDivElement>
  interactive: React.RefObject<HTMLDivElement>
  setEndVideo: React.Dispatch<React.SetStateAction<boolean>>
  setGameWidth: React.Dispatch<React.SetStateAction<string>>
  setPercentSize: React.Dispatch<React.SetStateAction<number>>
  setLimit: React.Dispatch<React.SetStateAction<number>>
}

export const ComingSoonLayout = ({
  intro,
  endVideo,
  setEndVideo,
  box,
  interactive,
  limit,
  sizeUp,
  gameWidth,
  setGameWidth,
  percentSize,
  setPercentSize,
  setLimit
}: ComingSoonLayoutProps) => {
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
          <Interactivebox ref={interactive}>
            <span style={{ position: 'absolute', margin: '2vh' }}>www를 잡아서 로고 이미지에 넣어주세요</span>
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
  overflow: hidden;

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
  width: 100vw;
  height: 1.6vh;
  display: flex;
  // justify-content: center;
  position: absolute;
  bottom: 0;
  margin-top: calc(100vh * 4.75 / 100);
`
const Bar = styled.div<{ width: string; transition: string }>`
  background-color: var(--main1-blue);
  width: ${({ width }) => width};
  height: inherit;
  transition: ${({ transition }) => transition};
`
