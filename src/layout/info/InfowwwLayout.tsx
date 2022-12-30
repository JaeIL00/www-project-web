import React from 'react'
import styled from 'styled-components'
import logo from '/assets/logo.svg'

export const InfowwwLayout = () => {
  return (
    <Container>
      <TitleBox>
        <img src={logo} alt="로고" style={{ width: '10.37vh' }} />
        <TitleText>EXHIBITION MARKET</TitleText>
      </TitleBox>
      <ContentsBox>
        <ImgBox>
          <Image
            src="https://www-web-assets.s3.ap-northeast-2.amazonaws.com/common/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5+%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3.jpeg"
            alt="메인 포스터"
          />
        </ImgBox>
        <TextBox>
          <SubTitle color="var(--main1-blue)">
            HELLO
            <br />
            OUR TEAM WWW
          </SubTitle>
          <SubTitle marginTop="2.5vh" color="var(--black-200)">
            WE WANT WORTH
            <br />
            IN WORLDWIDE WEB
          </SubTitle>

          <Text weight="700" marginTop="6vh">
            WWW : 월드 와이드 웹
            <br />
            온라인으로만 존재하던 그들의 작품이, WWW 버그로 오프라인에 출현하다.
          </Text>
          <Text marginTop="2.22vh">
            COVID19로 온라인으로 졸업전시를 해야했던 디자인 대학생들은
            <br />
            어느새 작가가 되어 그들의 작품을 오프라인으로 출현시킵니다.
            <br />
            www는 이들의 작품으로 오프라인에서 전시 및 굿즈를 판매하고 온라인에 그들만의 공간을 마련합니다.
            <br />
            온라인이 억울했던 학생들은 www버그를 통해 드디어 작품을 세상밖에 내보입니다.
            <br />
            저희 www버그 축제에 모두 놀러오세요.
          </Text>
        </TextBox>
      </ContentsBox>
    </Container>
  )
}

interface StyleProps {
  marginTop?: string
  weight?: string
  color?: string
}

const Container = styled.div`
  padding: 0 2.6vw;
`
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.81vh 0;
  border-bottom: 1px solid #000;
`
const TitleText = styled.strong`
  margin-left: 2.22vh;
  font-size: 4.62vh;
`
const ContentsBox = styled.div`
  display: flex;
  padding: 7.4vh 0;
`
const ImgBox = styled.div`
  width: 50%;
  text-align: center;
`
const Image = styled.img`
  height: 55.83vh;
`
const TextBox = styled.div`
  width: 50%;
`
const SubTitle = styled.strong<StyleProps>`
  display: block;
  margin-top: ${({ marginTop }) => marginTop};
  font-size: 3.14vh;
  line-height: 4.16vh;
  color: ${({ color }) => color};
`
const Text = styled.span<StyleProps>`
  display: block;
  margin-top: ${({ marginTop }) => marginTop};
  font-size: 1.48vh;
  font-weight: ${({ weight }) => weight};
  line-height: 3.24vh;
`
