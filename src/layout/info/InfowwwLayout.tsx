import React from 'react'
import styled from 'styled-components'
import logo from '/assets/logo.svg'
import demo from '/assets/demoPoster.svg'

export const InfowwwLayout = () => {
  return (
    <>
      <TitleBox>
        <img src={logo} alt="로고" style={{ width: '7.25rem' }} />
        <TitleText>EXHIBITION MARKET</TitleText>
      </TitleBox>
      <ContentsBox>
        <ImgBox>
          <Image src={demo} alt="" />
        </ImgBox>
        <TextBox>
          <SubTitle color="var(--main1-blue)">
            HELLO
            <br />
            OUR TEAM WWW
          </SubTitle>
          <SubTitle marginTop="1.68rem" color="var(--black-200)">
            WE WANT WORTH
            <br />
            IN WORLDWIDE WEB
          </SubTitle>

          <Text weight="700" marginTop="calc(100vh * 6 / 100)">
            WWW : 월드 와이드 웹
            <br />
            온라인으로만 존재하던 그들의 작품이, WWW 버그로 오프라인에 출현하다.
          </Text>
          <Text marginTop="calc(100vh * 2.22 / 100)">
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
    </>
  )
}

interface StyleProps {
  marginTop?: string
  weight?: string
  color?: string
}
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: calc(100vh * 4.81 / 100) 0;
  border-bottom: 1px solid #000;
`
const TitleText = styled.strong`
  margin-left: 1.5rem;
  font-size: 3.12rem;
`
const ContentsBox = styled.div`
  display: flex;
  padding: calc(100vh * 7.4 / 100) 0;
`
const ImgBox = styled.div`
  width: 50%;
  text-align: center;
`
const Image = styled.img`
  height: calc(100vh * 55.83 / 100);
`
const TextBox = styled.div`
  width: 50%;
`
const SubTitle = styled.strong<StyleProps>`
  display: block;
  margin-top: ${({ marginTop }) => marginTop};
  font-size: 2.12rem;
  line-height: 2.81rem;
  color: ${({ color }) => color};
`
const Text = styled.span<StyleProps>`
  display: block;
  margin-top: ${({ marginTop }) => marginTop};
  font-size: 1rem;
  font-weight: ${({ weight }) => weight};
  line-height: calc(100vh * 3.24 / 100);
`
