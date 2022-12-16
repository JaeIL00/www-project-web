import React from 'react'
import styled from 'styled-components'
import arrowRight from '/assets/icon-arrow-right.png'
import { IconClose } from '../common/IconClose'
import shareWhite from '/assets/icon-share-white.png'
import { Link } from 'react-router-dom'
import { DetailTypes, AssetTypes } from '../../components/artwork/ArtworkDetail'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css' //basic
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ArtworkDetailLayoutProps {
  detail: DetailTypes
  assets: AssetTypes[]
}

export const ArtworkDetailLayout = ({ detail, assets }: ArtworkDetailLayoutProps) => {
  return (
    <Container>
      <InnerContainer>
        <ArtworkSlide>
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{
              type: 'fraction'
            }}
          >
            {assets &&
              assets.map(({ url, type }, index) => (
                <SwiperSlide key={index}>
                  {type === 'image' ? (
                    <img
                      src={url}
                      alt="작품 이미지"
                      style={{ width: '37.7vw', height: '37.7vw', objectFit: 'contain' }}
                    />
                  ) : null}
                  {type === 'video' ? (
                    <video
                      src={url}
                      controls
                      style={{ width: '37.7vw', height: '37.7vw', objectFit: 'contain' }}
                    ></video>
                  ) : null}
                </SwiperSlide>
              ))}
          </Swiper>
        </ArtworkSlide>
        <TextContents>
          <Text fontSize="calc(100vw * 0.83 / 100)" marginBottom="calc(100vw * 1.14 / 100)">
            {detail.artist.genre}&nbsp; | &nbsp;{detail.artist.nickname}
          </Text>
          <br />
          <Text fontSize="calc(100vw * 1.66 / 100)" fontWeight="700" marginBottom="calc(100vw * 4.27 / 100)">
            {detail.title}
          </Text>
          <br />
          <Text fontSize="calc(100vw * 0.83 / 100)">{detail.description}</Text>
        </TextContents>
      </InnerContainer>
      <Button
        backColor="var(--main1-blue)"
        width="calc(100vw * 13.54 / 100)"
        height="calc(100vw * 3.28 / 100)"
        position="absolute"
        bottom="8.3vh"
        right="0"
        hover="var(--main2-green)"
      >
        <LinkText to="" download>
          ARTIST
        </LinkText>
        <img src={arrowRight} alt="오른쪽화살아이콘" style={{ width: 'calc(100vw * 0.31 / 100)' }} />
      </Button>
      <Button top="5.5vw" left="calc(100vw * 2.6 / 100)" position="absolute">
        <img src={shareWhite} alt="페이지 공유하기 버튼" style={{ width: '1.17vw' }} />
      </Button>
      <Button top="calc(100vh * 9.53 / 100)" right="calc(100vw * 2.7 / 100)" position="absolute">
        <IconClose color="var(--white)" width="calc(100vw * 1.3 / 100)" />
      </Button>
    </Container>
  )
}

interface styleTypes {
  backColor?: string
  width?: string
  height?: string
  position?: string
  margin?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  padding?: string
  marginBottom?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  hover?: string
}

const Container = styled.div`
  background: var(--black-300);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  top: -6.24rem;
  z-index: 999999999;
`
const InnerContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0 16vw 0 2.6vw;
`
const ArtworkSlide = styled.div`
  position: relative;

  .swiper {
    margin-right: 9.5vw;
    overflow: visible;
  }
  .swiper-wrapper {
    width: 41.4vw;
    padding-left: 3.7vw;
    overflow: hidden;
  }
  .swiper-button-next {
    background: url(/assets/icon-arrow-right.png) no-repeat;
    background-size: 0.98vw auto;
    background-position: center;
    margin-left: 2.7vw;
  }

  .swiper-button-prev {
    background: url(/assets/icon-arrow-left.png) no-repeat;
    background-size: 0.98vw auto;
    background-position: center;
    left: 0;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-pagination-fraction {
    width: auto;
    left: auto;
    right: 3.75vw;
  }
  .swiper-pagination {
    display: inline;
    bottom: -1.9vw;
    font-size: 0.83vw;
    color: var(--black-100);
  }

  .swiper-pagination-current {
    margin-right: 0.3vw;
    color: var(--white);
  }
  .swiper-pagination-total {
    margin-left: 0.3vw;
    color: var(--black-100);
  }
`
const Button = styled.button<styleTypes>`
  background-color: ${({ backColor }) => (backColor ? backColor : 'transparent')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  &:hover {
    background-color: ${({ hover }) => hover};
  }
`
const TextContents = styled.div`
  margin-top: 1.66vw;
`
const Text = styled.span<styleTypes>`
  display: inline-block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => (color ? color : 'var(--white)')};
  word-break: keep-all;
`
const LinkText = styled(Link)`
  margin: 0 4.32vw 0 1.14vw;
  font-size: 1.56vw;
  color: var(--white);
`
