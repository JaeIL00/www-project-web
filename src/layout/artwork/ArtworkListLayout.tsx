import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArtworkTypes } from '../../components/artwork/ArtworkList'
import { position } from '../../components/artwork/ArtworkPosition'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ArtworkListLayoutProps {
  artwork: ArtworkTypes[]
  percentage: string[]
  filter: boolean[]
  filterImg: string
  startDrag: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const ArtworkListLayout = ({ artwork, percentage, filter, filterImg, startDrag }: ArtworkListLayoutProps) => {
  const navigate = useNavigate()
	
  return (
    <Contain>
      <Bluebox></Bluebox>
      {filterImg === 'all' ? <img src="/assets/logo.svg" alt="로고 이미지" style={{ width: '23.8vw' }} /> : null}
      {filterImg === 'visual' ? (
        <img
          src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/3D/vidual+icon2.png"
          alt="비쥬얼 로고 이미지"
          style={{ width: '23.8vw' }}
        />
      ) : null}
      {filterImg === 'media' ? (
        <img
          src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/3D/media+icon.png"
          alt="미디어 로고 이미지"
          style={{ width: '23.8vw' }}
        />
      ) : null}
      {filterImg === 'living' ? (
        <img
          src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/3D/living+icon.png"
          alt="리빙 로고 이미지"
          style={{ width: '23.8vw' }}
        />
      ) : null}
      {filterImg === 'fashion' ? (
        <img
          src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/3D/fashion+icon2.png"
          alt="패션 로고 이미지"
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
              <Image src={url.replace('.jpeg', '_1080p.jpeg')} alt="작가 대표작 이미지" precent={percentage[index]} effect="blur"  />
              <Screen backColor={filter[index] ? 'var(--main1-lightBlue)' : 'none'} />
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
const Image = styled(LazyLoadImage)<StyleTypes>`
  width: ${({ precent }) => precent + 'vw'};
`
const Screen = styled.div<StyleTypes>`
  background-color: ${({ backColor }) => backColor};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`
