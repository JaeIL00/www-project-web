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
          <ExampleFont marginBottom="9.9vh" color="var(--main1-blue)">
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
          <SubTitle color="var(--black-200)">
            WWW FONT
            <br />
            FREE DOWNLOAD
          </SubTitle>
          <Text weight="700" marginTop="15.27vh">
            전시 기념 자체제작 폰트 www를 무료 배포합니다
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
            <Button backColor="var(--black-300)">
              <DownloadLink href="" download>
                WWW TTF
              </DownloadLink>
              <img src={arrow} alt="오른쪽화살아이콘" style={{ margin: 'auto 0' }} />
            </Button>
            <Button backColor="var(--main1-blue)">
              <DownloadLink href="" download>
                WWW OTF
              </DownloadLink>
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
  height: calc(100vh - 10.24rem);
  position: relative;
  padding: 0 2.6vw;
`
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.81vh 0;
  border-bottom: 1px solid #000;
`
const TitleText = styled.strong`
  font-size: 4.62vh;
`
const ContentsBox = styled.div`
  display: flex;
  padding: 7.4vh 0;
`
const ExampleBox = styled.div`
  width: 50%;
  text-align: center;
`
const ExampleFont = styled.strong<StyleProps>`
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: 4.62vh;
  line-height: 4.16vh;
  color: ${({ color }) => color};
`
const TextBox = styled.div`
  width: 50%;
`
const SubTitle = styled.strong<StyleProps>`
  display: block;
  margin-bottom: 15.27vh;
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
const DownloadBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 8.33vh;
  right: 0;
`
const Button = styled.button<StyleProps>`
  background-color: ${({ backColor }) => backColor};
  display: flex;
  align-items: center;
  padding: 1.2vh 2.6vw 1.2vh 1.14vw;
  &:hover {
    background-color: var(--main2-green);
  }
`
const DownloadLink = styled.a`
  margin-right: 3.33vh;
  font-size: 2.77vh;
  color: var(--white);
`
