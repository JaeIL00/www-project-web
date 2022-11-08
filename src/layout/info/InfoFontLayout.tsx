import React from 'react'
import styled from 'styled-components'
import arrow from '/assets/arrowRight.svg'

export const InfoFontLayout = () => {
  return (
    <FontContainer>
      <TitleBox>
        <TitleText>FONT</TitleText>
      </TitleBox>
      <ContentsBox>
        <ExampleBox>
          <ExampleFont marginBottom="6.68rem" color="#1635F4">
            ABCDEFGHIJKLMN
            <br />
            <br />
            OPQRSTUVWXYZ
          </ExampleFont>
          <ExampleFont>
            ONLY ENGLISH
            <br />
            <br />
            MAKE BY DISP
          </ExampleFont>
        </ExampleBox>
        <TextBox>
          <SubTitle color="#5B5D6C">
            WWW FONT
            <br />
            FREE DOWNLOAD
          </SubTitle>
          <Text weight="700" marginTop="5.37rem">
            전시 기념 자체제작 폰트 www를 부료 배포합니다
          </Text>
          <Text marginTop="2.4rem">
            www는 픽셀아트 느낌을 최소화 하고 대담한 무드를 강조한 폰트입니다.
            <br />
            사이트, 포스터, 부스, 브로슈어 등 활용되었으며 전시의 전반적인 브랜딩을 보여줍니다.
            <br />
            상업적 이용을 허용하되 무단 복제 및 배포를 금합니다.
          </Text>
          <Text weight="700">FontCopyrightⓒDISP</Text>
          <DownloadBox>
            <Button backColor="#242528">
              <Link href="" download>
                WWW TTF
              </Link>
              <img src={arrow} alt="오른쪽화살아이콘" style={{ margin: 'auto 0' }} />
            </Button>
            <Button backColor="#1635F4">
              <Link href="" download>
                WWW OTF
              </Link>
              <img src={arrow} alt="오른쪽화살아이콘" />
            </Button>
          </DownloadBox>
        </TextBox>
      </ContentsBox>
    </FontContainer>
  )
}

interface StyleProps {
  backColor?: string
  marginTop?: string
  marginBottom?: string
  weight?: string
  color?: string
}
const FontContainer = styled.div`
  height: calc(100vh - 10.43rem);
  position: relative;
`
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.37rem 0;
  border-bottom: 1px solid #000;
`
const TitleText = styled.strong`
  margin-left: 1.5rem;
  font-size: 3.12rem;
`
const ContentsBox = styled.div`
  display: flex;
  padding: 5rem 0;
`
const ExampleBox = styled.div`
  width: 50%;
  text-align: center;
`
const ExampleFont = styled.strong<StyleProps>`
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: 3.12rem;
  color: ${({ color }) => color};
`
const TextBox = styled.div`
  width: 50%;
`
const SubTitle = styled.strong<StyleProps>`
  display: block;
  margin-bottom: 10.31rem;
  font-size: 2.12rem;
  line-height: 2.81rem;
  color: ${({ color }) => color};
`
const Text = styled.span<StyleProps>`
  display: block;
  margin-top: ${({ marginTop }) => marginTop};
  font-size: 1rem;
  font-weight: ${({ weight }) => weight};
  line-height: 2.2rem;
`
const DownloadBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 5.62rem;
  right: 0;
`
const Button = styled.button<StyleProps>`
  background-color: ${({ backColor }) => backColor};
  display: flex;
  align-items: center;
  padding: 0.87rem 3.12rem 0.87rem 1.37rem;
  &:hover {
    background-color: #64e269;
  }
`
const Link = styled.a`
  margin-right: 2.25rem;
  font-family: Pretendard;
  font-size: 1.87rem;
  color: #fff;
`
