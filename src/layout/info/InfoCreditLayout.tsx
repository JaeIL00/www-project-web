import React from 'react'
import styled from 'styled-components'

const team = [
  {
    title: 'Project manager',
    lead: 'DISP',
    serve: 'Management All',
    assist: 'Artist All',
    margin: '6.12rem'
  },
  { title: 'Brand design', lead: 'DISP', margin: '6rem' },
  { title: '3D Graphic design', lead: 'Mery', serve: 'kwonasart', margin: '7.18rem' },
  { title: '2D Graphic design', lead: 'Si yeon', serve: 'yu jin', margin: '7.12rem' },
  { title: 'Motion design', lead: 'YANZI', serve: 'Mery', margin: '7.93rem' },
  { title: 'Editorial design', lead: 'yu jin', serve: 'Si yeon', margin: '0' }
]

export const InfoCreditLayout = () => {
  return (
    <InfoContainer>
      <TitleBox>
        <TitleText>CREDIT</TitleText>
      </TitleBox>
      <ContentsBox>
        <ContentsInnerBox>
          <RoleList marginBottom="1.06rem">
            <Square backColor="var(--lead-orange)"></Square>
            <Text marginLeft="1.87rem" color="#707070">
              Lead
            </Text>
          </RoleList>
          <RoleList marginBottom="1.06rem">
            <Square backColor="var(--serve-blue)"></Square>
            <Text marginLeft="1.87rem" color="#707070">
              Serve
            </Text>
          </RoleList>
          <RoleList marginBottom="1.06rem">
            <Square backColor="var(--assist-green)"></Square>
            <Text marginLeft="1.87rem" color="#707070">
              Assist
            </Text>
          </RoleList>
        </ContentsInnerBox>
        <MembersBox>
          <DirectorBox>
            <Text display="inline" color="#707070">
              Director
            </Text>
            <Text display="inline" marginLeft="2rem">
              DISP
            </Text>
          </DirectorBox>
          <TeamsBox>
            {team.map((item) => (
              <TeamList key={item.title} marginRight={item.margin}>
                <Text color="#707070" marginBottom="2.25rem">
                  {item.title}
                </Text>
                <RoleList marginBottom="1.87rem">
                  <Square backColor="var(--lead-orange)"></Square>
                  <Text marginLeft="1.12rem">{item.lead}</Text>
                </RoleList>
                {item.serve && (
                  <RoleList marginBottom="1.87rem">
                    <Square backColor="var(--serve-blue)"></Square>
                    <Text marginLeft="1.12rem">{item.serve}</Text>
                  </RoleList>
                )}
                {item.assist && (
                  <RoleList>
                    <Square backColor="var(--assist-green)"></Square>
                    <Text marginLeft="1.12rem">{item.assist}</Text>
                  </RoleList>
                )}
              </TeamList>
            ))}
          </TeamsBox>
          <TeamsBox>
            <TeamList marginRight="6.12rem">
              <Text color="#707070" marginBottom="2.25rem">
                VMD
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--lead-orange)"></Square>
                <Text marginLeft="1.12rem">Nam Yeonwoo</Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--serve-blue)"></Square>
                <Text marginLeft="1.12rem">Management All</Text>
              </RoleList>
            </TeamList>
            <TeamList marginRight="7.37rem">
              <Text color="#707070" marginBottom="2.25rem">
                MD
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--lead-orange)"></Square>
                <Text marginLeft="1.12rem">DISP</Text>
              </RoleList>
            </TeamList>
            <TeamList marginRight="3.25rem">
              <Text color="#707070" marginBottom="2.25rem">
                UIUX
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--lead-orange)"></Square>
                <Text marginLeft="1.12rem">kwonasart</Text>
                <Text display="inline" marginLeft="2.06rem" color="var(--black-100)">
                  Mobile
                </Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--lead-orange)"></Square>
                <Text marginLeft="1.12rem">DISP</Text>
                <Text display="inline" marginLeft="4.62rem" color="var(--black-100)">
                  Web
                </Text>
              </RoleList>
            </TeamList>
            <TeamList marginRight="5.31rem">
              <Text color="#707070" marginBottom="2.25rem">
                Frontend
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--lead-orange)"></Square>
                <Text marginLeft="1.12rem">Ryn</Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--serve-blue)"></Square>
                <Text marginLeft="1.12rem">SeungHun Byeon</Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--serve-blue)"></Square>
                <Text marginLeft="1.12rem">Jae IL</Text>
              </RoleList>
            </TeamList>
            <TeamList marginRight="4.93rem">
              <Text color="#707070" marginBottom="2.25rem">
                Backend
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--lead-orange)"></Square>
                <Text marginLeft="1.12rem">Jaecheol Jeong</Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--serve-blue)"></Square>
                <Text marginLeft="1.12rem">ash</Text>
              </RoleList>
            </TeamList>
            <TeamList>
              <Text color="#707070" marginBottom="2.25rem">
                Staff
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor="var(--lead-orange)"></Square>
                <Text marginLeft="1.12rem">All</Text>
              </RoleList>
            </TeamList>
          </TeamsBox>
        </MembersBox>
        <ContentsInnerBox>
          <Text color="var(--black-200)">
            WWW
            <br />
            <br />
            TEAM
            <br />
            <br />
            12th
          </Text>
        </ContentsInnerBox>
      </ContentsBox>
    </InfoContainer>
  )
}

interface StyleProps {
  backColor?: string
  display?: string
  marginRight?: string
  marginLeft?: string
  marginBottom?: string
  weight?: string
  color?: string
  textAlign?: string
}
const InfoContainer = styled.div`
  margin: 0 3.12rem;
`
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.37rem 0;
  border-bottom: 1px solid #000;
`
const TitleText = styled.strong`
  font-size: 3.12rem;
`
const ContentsBox = styled.div`
  display: flex;
  padding: 5rem 0;
`
const ContentsInnerBox = styled.div`
  width: 6.25rem;
`
const RoleList = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`
const Square = styled.div<StyleProps>`
  background-color: ${({ backColor }) => backColor};
  width: 1.18rem;
  height: 1.18rem;
`
const MembersBox = styled.div`
  flex-grow: 1;
`
const DirectorBox = styled.div<StyleProps>`
  text-align: center;
  margin-bottom: 3.6rem;
`
const TeamsBox = styled.div`
  display: flex;
  margin: 0 8.12rem;
  padding: 3.56rem 2rem 3.43rem;
  border-top: 1px solid var(--black-100);
`
const TeamList = styled.div<StyleProps>`
  margin-right: ${({ marginRight }) => marginRight};
`
const Text = styled.span<StyleProps>`
  display: ${({ display }) => (display ? display : 'block')};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: 1rem;
  color: ${({ color }) => (color ? color : '#000')};
`
