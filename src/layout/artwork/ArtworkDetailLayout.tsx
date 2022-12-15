import React from 'react'
import styled from 'styled-components'
import arrowRight from '/assets/icon-arrow-right.png'
import arrowLeft from '/assets/icon-arrow-left.png'
import { IconClose } from '../common/IconClose'
import shareWhite from '/assets/icon-share-white.png'
import { Link } from 'react-router-dom'

export const ArtworkDetailLayout = () => {
  return (
    <Container>
      <InnerContainer>
        <ArtworkSlide>
          <Button>
            <img src={arrowLeft} alt="" style={{ width: 'calc(100vw * 0.98 / 100)' }} />
          </Button>
          <Artworkbox>
            <img src="" alt="작품 이미지" style={{ width: 'inherit', height: 'inherit', objectFit: 'contain' }} />
            <GuideImg>
              <Text fontSize="calc(100vw * 0.83 / 100)">1</Text>
              <Text fontSize="calc(100vw * 0.83 / 100)" color="var(--black-100)">
                &nbsp;&nbsp; / &nbsp;10
              </Text>
            </GuideImg>
          </Artworkbox>
          <Button>
            <img src={arrowRight} alt="" style={{ width: 'calc(100vw * 0.98 / 100)' }} />
          </Button>
        </ArtworkSlide>
        <TextContents>
          <Text fontSize="calc(100vw * 0.83 / 100)" marginBottom="calc(100vw * 1.14 / 100)">
            {/* Media design I PUNI{' '} */}
          </Text>
          <br />
          <Text fontSize="calc(100vw * 1.66 / 100)" fontWeight="700" marginBottom="calc(100vw * 4.27 / 100)">
            {/* pink vacance Series */}
          </Text>
          <br />
          <Text fontSize="calc(100vw * 0.83 / 100)">
            {/* pink vacances는 milk 시리즈 일러스트의 첫번째 챕터입니다. 어려운 상황속에서도 마음을 진정시켜주던 바닷가에서
            모든장면을 하나하나 담아보려 했어요. 가만히 바다를 바라보고, 튜브를 타고 놀기도 하며 수영장에서 다이빙도
            해보고 노점에서 음료를 사먹고 실수로 떨어뜨리면서 잠깐이나마 자유를 느낍니다. 이 그림을 받아보는 모든이가
            부드러운 감성을 느꼈으면 좋겠습니다. pink vacances는 milk 시리즈 일러스트의 첫번째 챕터입니다. 어려운
            상황속에서도 마음을 진정시켜주던 바닷가에서 모든장면을 하나하나 담아보려 했어요. 가만히 바다를 바라보고,
            튜브를 타고 놀기도 하며 수영장에서 다이빙도 해보고 노점에서 음료를 사먹고 실수로 떨어뜨리면서 잠깐이나마
            자유를 느낍니다. 이 그림을 받아보는 모든이가 부드러운 감성을 느꼈으면 좋겠습니다.pink vacances는 milk 시리즈
            일러스트의 첫번째 챕터입니다. 어려운 상황속에서도 마음을 진정시켜주던 바닷가에서 모든장면을 하나하나
            담아보려 했어요. 가만히 바다를 바라보고, 튜브를 타고 놀기도 하며 수영장에서 다이빙도 해보고 노점에서 음료를
            사먹고 실수로 떨어뜨리면서 잠깐이나마 자유를 느낍니다. 이 그림을 받아보는 모든이가 부드러운 감성을 느꼈으면
            좋겠습니다. */}
          </Text>
        </TextContents>
        <Buttonbox>
          <Button
            backColor="var(--main1-blue)"
            width="calc(100vw * 13.54 / 100)"
            height="calc(100vw * 3.28 / 100)"
            hover="var(--main2-green)"
          >
            <LinkText to="" download>
              ARTIST
            </LinkText>
            <img src={arrowRight} alt="오른쪽화살아이콘" style={{ width: 'calc(100vw * 0.31 / 100)' }} />
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
`
const InnerContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0 calc(100vw * 16 / 100) 0 calc(100vw * 2.6 / 100);
`
const ArtworkSlide = styled.div`
  display: flex;
  align-items: center;
  margin-right: calc(100vw * 9.53 / 100);
`
const Artworkbox = styled.div`
  width: calc(100vw * 37.7 / 100);
  height: calc(100vw * 37.7 / 100);
  position: relative;
  margin: 0 calc(100vw * 2.76 / 100);
`
const Buttonbox = styled.div`
  display: flex;
  position: absolute;
  bottom: calc(100vh * -6.57 / 100);
  right: calc(100vw * -16 / 100);
`
const Button = styled.button<styleTypes>`
  background-color: ${({ backColor }) => (backColor ? backColor : 'transparent')};
  width: ${({ width }) => width};
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
const GuideImg = styled.div`
  position: absolute;
  right: 0;
  margin-top: calc(100vw * 1.92 / 100);
`
const TextContents = styled.div`
  margin-top: calc(100vw * 1.66 / 100);
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
  margin: 0 calc(100vw * 4.32 / 100) 0 calc(100vw * 1.14 / 100);
  font-size: calc(100vw * 1.56 / 100);
  color: var(--white);
`
