import React from 'react'
import styled from 'styled-components'
import xIcon from '/assets/icon-x.png'
import shareWhite from '/assets/icon-share-white.png'
import arrow from '/assets/icon-arrow-right.png'
import { ArtistDetailTypes } from '../../components/artist/ArtistDetail'
import { TextCopySnackLayout } from '../../layout/common/TextCopySnackLayout'
import { useAppDispatch } from '../../store/Store'
import { textCopyHandler, rebackHandler } from '../../store/CopySlice'
import { useNavigate } from 'react-router-dom'

interface ArtistDetailProps {
  detail: ArtistDetailTypes

  isCopy: boolean
  setWhatCopy: React.Dispatch<React.SetStateAction<string>>
  whatCopy: string
}

export const ArtistDetailLayout = ({ detail, whatCopy, isCopy, setWhatCopy }: ArtistDetailProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <Container>
      {detail.profileImage ? (
        <>
          <InnerContainer>
            <Profilebox>
              <Image src={detail.profileImage} alt="작가 프로필 이미지" />
              <Text fontSize="calc(100vw * 1.25 / 100)" fontWeight="700" marginBottom="1.19vw">
                {detail.genre}&nbsp;&nbsp; | &nbsp;&nbsp;{detail.type}
              </Text>
              <br />
              {detail.nickname !== detail.name ? (
                <Text fontSize="calc(100vw * 1.25 / 100)" fontWeight="500">
                  {detail.nickname}&nbsp;&nbsp; | &nbsp;&nbsp;{detail.name}
                </Text>
              ) : (
                <Text fontSize="calc(100vw * 1.25 / 100)" fontWeight="500">
                  {detail.name}
                </Text>
              )}
            </Profilebox>
            <div>
              <Text fontSize="calc(100vw * 1.66 / 100)" fontWeight="700" marginBottom="2.62rem">
                {detail.description ? `${detail.description}` : `디자인하는 ${detail.nickname}입니다`}
              </Text>
              <br />
              <Text fontSize="calc(100vw * 0.83 / 100)" fontWeight="500">
                {detail.bio}
              </Text>
            </div>
          </InnerContainer>
          <Buttonbox>
            {detail.linkTree ? (
              <LinkText href={detail.linkTree} target="_blank" backColor="var(--black-300)">
                CONTACT
                <img src={arrow} alt="오른쪽화살아이콘" style={{ width: '0.4vw', marginLeft: '2.39vw' }} />
              </LinkText>
            ) : (
              <Button
                backColor="var(--black-300)"
                fontSize="1.56vw"
                padding="0.72vw 2.6vw 0.72vw 1.14vw"
                color="var(--white)"
                hover="var(--main2-green)"
                onClick={() => {
                  dispatch(textCopyHandler(detail.email))
                  setTimeout(() => {
                    dispatch(rebackHandler())
                  }, 3000)
                  setWhatCopy('이메일을')
                }}
              >
                CONTACT
                <img src={arrow} alt="오른쪽화살아이콘" style={{ width: '0.4vw', marginLeft: '2.39vw' }} />
              </Button>
            )}
            <LinkText href={`/artwork/${detail.id}`} backColor="var(--main1-blue)">
              ARTWORK
              <img src={arrow} alt="오른쪽화살아이콘" style={{ width: '0.4vw', marginLeft: '2.39vw' }} />
            </LinkText>
          </Buttonbox>
          <Button
            width="calc(100vw * 1.56 / 100)"
            top="calc(100vh * 9.35 / 100)"
            left="calc(100vw * 2.6 / 100)"
            position="absolute"
            onClick={() => {
              dispatch(textCopyHandler(window.location.href))
              setTimeout(() => {
                dispatch(rebackHandler())
              }, 3000)
              setWhatCopy('링크를')
            }}
          >
            <img src={shareWhite} alt="페이지 공유하기 버튼" />
          </Button>
          <Button top="calc(100vh * 9.53 / 100)" right="2.73vw" position="absolute" onClick={() => navigate('/artist')}>
            <img src={xIcon} alt="이전 페이지 이동 버튼" style={{ width: 'calc(100vw * 1.3 / 100)' }} />
          </Button>
          <TextCopySnackLayout isCopy={isCopy} word={whatCopy} />
        </>
      ) : null}
    </Container>
  )
}
interface styleTypes {
  backColor?: string
  width?: string
  height?: string
  display?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  marginBottom?: string
  padding?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  hover?: string
  animationName?: string
}
const Container = styled.div`
  background: var(--sub-blue);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: -6.24rem;
  overflow: hidden;
  z-index: 9999;

  @keyframes clipboard-up {
    0% {
      bottom: -5rem;
    }
    20% {
      bottom: 0;
    }
    80% {
      bottom: 0;
    }
    100% {
      bottom: -5rem;
    }
  }
`
const InnerContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 9.73vw 0 7.96vw;
`
const Profilebox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: calc(100vw * 11.82 / 100);
`
const Image = styled.img`
  width: 26.04vw;
  margin-bottom: 2.91vw;
`
const Buttonbox = styled.div`
  display: flex;
  position: absolute;
  bottom: 4.68vw;
  right: 0;
`
const Text = styled.span<styleTypes>`
  display: inline-block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 1.2vw;
  color: ${({ color }) => color};
  word-break: keep-all;
`
const Button = styled.button<styleTypes>`
  background-color: ${({ backColor }) => (backColor ? backColor : 'transparent')};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};

  &:hover {
    background-color: ${({ hover }) => hover};
  }
`
const LinkText = styled.a<styleTypes>`
  background-color: ${({ backColor }) => backColor};
  display: flex;
  align-items: center;
  padding: 0.72vw 2.6vw 0.72vw 1.14vw;
  font-size: 1.56vw;
  color: var(--white);
  cursor: pointer;

  &:hover {
    background-color: var(--main2-green);
  }
`
