import React from 'react'
import styled from 'styled-components'
import xIcon from '/assets/icon-x.png'
import shareWhite from '/assets/icon-share-white.png'
import arrow from '/assets/arrowRight.svg'
import { Link } from 'react-router-dom'
import { ArtistDetailTypes } from '../../components/artist/ArtistDetail'

export const ArtistDetailLayout = ({ detail }: { detail: ArtistDetailTypes[] }) => {
  return (
    <Container>
      <InnerContainer>
        <Profilebox>
          <Image src={''} alt="작가 프로필 이미지" />
          <Text fontSize="calc(100vw * 1.25 / 100)" fontWeight="700" marginBottom="0.87rem">
            {detail[0].genre}
          </Text>
          <br />
          <Text fontSize="calc(100vw * 1.25 / 100)" fontWeight="500">
            {detail[0].nickname}
          </Text>
        </Profilebox>
        <div>
          <Text fontSize="calc(100vw * 1.66 / 100)" fontWeight="700" marginBottom="2.62rem">
            디자인하는 {detail[0].nickname}입니다
          </Text>
          <br />
          <Text fontSize="calc(100vw * 0.83 / 100)" fontWeight="500">
            {detail[0].description}
          </Text>
        </div>
        <Buttonbox>
          <Button
            backColor="var(--black-300)"
            width="calc(100vw * 13.54 / 100)"
            height="calc(100vw * 3.28 / 100)"
            hover="var(--main2-green)"
          >
            <LinkText to="" download>
              CONTACT
            </LinkText>
            <img src={arrow} alt="오른쪽화살아이콘" />
          </Button>
          <Button
            backColor="var(--main1-blue)"
            width="calc(100vw * 13.54 / 100)"
            height="calc(100vw * 3.28 / 100)"
            hover="var(--main2-green)"
          >
            <LinkText to="" download>
              ARTWORK
            </LinkText>
            <img src={arrow} alt="오른쪽화살아이콘" />
          </Button>
        </Buttonbox>
      </InnerContainer>
      <Button
        width="calc(100vw * 1.56 / 100)"
        top="calc(100vh * 9.35 / 100)"
        left="calc(100vw * 2.6 / 100)"
        position="absolute"
      >
        <img src={shareWhite} alt="페이지 공유하기 버튼" />
      </Button>
      <Button top="calc(100vh * 9.53 / 100)" right="calc(100vw * 2.7 / 100)" position="absolute">
        <img src={xIcon} alt="이전 페이지 이동 버튼" style={{ width: 'calc(100vw * 1.3 / 100)' }} />
      </Button>
    </Container>
  )
}
interface styleTypes {
  backColor?: string
  width?: string
  height?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  marginBottom?: string
  padding?: string
  fontSize?: string
  fontWeight?: string
  hover?: string
}
const Container = styled.div`
  background: var(--sub-blue);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  top: -6.24rem;
`
const InnerContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 calc(100vw * 9.73 / 100) 0 calc(100vw * 7.96 / 100);
`
const Profilebox = styled.div`
  margin-right: calc(100vw * 11.82 / 100);
`
const Image = styled.img`
  width: calc(100vw * 26.04 / 100);
  margin-bottom: 3.18rem;
`
const Buttonbox = styled.div`
  display: flex;
  position: absolute;
  bottom: calc(100vh * -12.03 / 100);
  right: calc(100vw * -9.73 / 100);
`
const Text = styled.span<styleTypes>`
  display: inline-block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
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
  &:hover {
    background-color: ${({ hover }) => hover};
  }
`
const LinkText = styled(Link)`
  margin-right: 2.25rem;
  font-size: calc(100vw * 1.56 / 100);
  color: var(--white);
`
