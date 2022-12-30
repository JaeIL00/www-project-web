import React from 'react'
import styled from 'styled-components'
import { KakaoMap } from '../../components/info/KakaoMap'

export const InfoHowLayout = () => {
  return (
    <Container>
      <TitleBox>
        <TitleText>HOW</TitleText>
      </TitleBox>
      <ContentsBox>
        <ImgBox>
          <KakaoMap />
        </ImgBox>
        <TextBox>
          <WhBox border="1px solid var(--black-100)">
            <SubTitleBox>
              <SubTitle>WHEN</SubTitle>
            </SubTitleBox>
            <InnerTextBox>
              <UsingBox marginRight="7.86vw">
                <Text weight="700">
                  12/17 SAT
                  <br />
                  <br />
                  12/18 SUN
                </Text>
              </UsingBox>
              <div>
                <Text>
                  10:00 - 19:00
                  <br />
                  <br />
                  10:00 - 19:00
                </Text>
              </div>
            </InnerTextBox>
          </WhBox>
          <WhBox marginTop="3.42vh" border="1px solid var(--black-100)">
            <SubTitleBox>
              <SubTitle>WHERE</SubTitle>
            </SubTitleBox>
            <InnerTextBox>
              <UsingBox>
                <Text weight="700" marginBottom="1.18vh">
                  성수 무브모브 카페 & 스튜디오
                </Text>
                <Text marginBottom="1.92vh">서울 성동구 성수일로 56</Text>
                <List marginBottom="1.18vh">
                  <Text>• &nbsp;뚝섬역 5번 출구 / 성수역 3번 출구 도보 10분 거리에 있습니다.</Text>
                </List>
                <List>
                  <Text>• &nbsp;전시장 주차공간이 없사오니 대중교통을 이용해주세요.</Text>
                </List>
              </UsingBox>
            </InnerTextBox>
          </WhBox>
          <WhBox marginTop="calc(100vh * 3.42 / 100)" border="1px solid var(--black-100)">
            <SubTitleBox>
              <SubTitle>WHO</SubTitle>
            </SubTitleBox>
            <InnerTextBox>
              <UsingBox marginRight="7.86vw">
                <Text weight="700">
                  참가팀
                  <br />
                  <br />
                  장르
                </Text>
              </UsingBox>
              <div>
                <Text>
                  20
                  <br />
                  <br />
                  시각 | 미디어 | 패션 | 리빙
                </Text>
              </div>
            </InnerTextBox>
          </WhBox>
          <WhBox marginTop="3.42vh">
            <SubTitleBox>
              <SubTitle>WHAT</SubTitle>
            </SubTitleBox>
            <InnerTextBox>
              <UsingBox>
                <Text>• &nbsp;별도의 사전 예약이 없으며 무료 입장입니다.</Text>
                <br />
                <Text>• &nbsp;행사장 내부에서는 마스크를 상시 착용해야 합니다.</Text>
                <br />
                <Text>
                  • &nbsp;외부 음식물 반입 금지이며, 전시장 내에서 모브무브 카페의 식음료만 취식이 가능합니다.
                </Text>
                <br />
                <Text>
                  • &nbsp;현장 스태프와 전시 작가는 명찰을 착용하고 있습니다. 문의 사항은 스태프에게
                  말씀해주세요.
                </Text>
              </UsingBox>
            </InnerTextBox>
          </WhBox>
        </TextBox>
      </ContentsBox>
    </Container>
  )
}

interface StyleProps {
  weight?: string
  marginTop?: string
  marginBottom?: string
  marginRight?: string
  border?: string
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
  font-size: 4.62vh;
`
const ContentsBox = styled.div`
  display: flex;
  padding: 7.4vh 0;
`
const ImgBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`
const TextBox = styled.div`
  width: 50%;
`
const WhBox = styled.div<StyleProps>`
  display: flex;
  margin-top: ${({ marginTop }) => marginTop};
  border-bottom: ${({ border }) => border};
`
const SubTitleBox = styled.div`
  width: 14.37rem;
  margin-right: calc(100vw * 4.68 / 100);
`
const SubTitle = styled.strong`
  font-size: 3.14vh;
  color: var(--black-200);
`
const InnerTextBox = styled.div`
  display: flex;
`
const UsingBox = styled.div<StyleProps>`
  margin-right: ${({ marginRight }) => marginRight};
  padding-bottom: 3.42vh;
`
const List = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`
const Text = styled.span<StyleProps>`
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: 1.48vh;
  font-weight: ${({ weight }) => weight};
`
