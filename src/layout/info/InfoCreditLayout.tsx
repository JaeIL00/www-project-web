import React from 'react'
import styled from 'styled-components'

const role = {
  orange: '#FF7F00',
  blue: '#00A7FF',
  green: '#28AD1D'
}
const team = [
  { title: 'Project manager', lead: 'DISP', serve: 'Management All', assist: 'Artist All' },
  { title: 'Brand design', lead: 'DISP' },
  { title: '3D Graphic design', lead: 'Mery', serve: 'kwonasart' },
  { title: '2D Graphic design', lead: 'Si yeon', serve: 'yu jin' },
  { title: 'Motion design', lead: 'YANZI', serve: 'Mery' },
  { title: 'Editorial design', lead: 'yu jin', serve: 'Si yeon' }
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
            <Square backColor={role.orange}></Square>
            <Text marginLeft="1.87rem" color="#707070">
              Lead
            </Text>
          </RoleList>
          <RoleList marginBottom="1.06rem">
            <Square backColor={role.blue}></Square>
            <Text marginLeft="1.87rem" color="#707070">
              Serve
            </Text>
          </RoleList>
          <RoleList marginBottom="1.06rem">
            <Square backColor={role.green}></Square>
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
              <div key={item.title}>
                <Text color="#707070" marginBottom="2.25rem">
                  {item.title}
                </Text>
                <RoleList marginBottom="1.87rem">
                  <Square backColor={role.orange}></Square>
                  <Text marginLeft="1.12rem">{item.lead}</Text>
                </RoleList>
                {item.serve && (
                  <RoleList marginBottom="1.87rem">
                    <Square backColor={role.blue}></Square>
                    <Text marginLeft="1.12rem">{item.serve}</Text>
                  </RoleList>
                )}
                {item.assist && (
                  <RoleList>
                    <Square backColor={role.green}></Square>
                    <Text marginLeft="1.12rem">{item.assist}</Text>
                  </RoleList>
                )}
              </div>
            ))}
          </TeamsBox>
          <TeamsBox>
            <div>
              <Text color="#707070" marginBottom="2.25rem">
                VMD
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.orange}></Square>
                <Text marginLeft="1.12rem">Nam Yeonwoo</Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.blue}></Square>
                <Text marginLeft="1.12rem">Management All</Text>
              </RoleList>
            </div>
            <div>
              <Text color="#707070" marginBottom="2.25rem">
                MD
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.orange}></Square>
                <Text marginLeft="1.12rem">DISP</Text>
              </RoleList>
            </div>
            <div>
              <Text color="#707070" marginBottom="2.25rem">
                UIUX
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.orange}></Square>
                <Text marginLeft="1.12rem">kwonasart</Text>
                <Text display="inline" marginLeft="2.06rem" color="#A4ABBE">
                  Mobile
                </Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.orange}></Square>
                <Text marginLeft="1.12rem">DISP</Text>
                <Text display="inline" marginLeft="4.62rem" color="#A4ABBE">
                  Web
                </Text>
              </RoleList>
            </div>
            <div>
              <Text color="#707070" marginBottom="2.25rem">
                Frontend
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.orange}></Square>
                <Text marginLeft="1.12rem">Ryn</Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.blue}></Square>
                <Text marginLeft="1.12rem">SeungHun Byeon</Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.blue}></Square>
                <Text marginLeft="1.12rem">Jae IL</Text>
              </RoleList>
            </div>
            <div>
              <Text color="#707070" marginBottom="2.25rem">
                Backend
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.orange}></Square>
                <Text marginLeft="1.12rem">Jaecheol Jeong</Text>
              </RoleList>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.blue}></Square>
                <Text marginLeft="1.12rem">ash</Text>
              </RoleList>
            </div>
            <div>
              <Text color="#707070" marginBottom="2.25rem">
                Staff
              </Text>
              <RoleList marginBottom="1.87rem">
                <Square backColor={role.orange}></Square>
                <Text marginLeft="1.12rem">All</Text>
              </RoleList>
            </div>
          </TeamsBox>
        </MembersBox>
        <ContentsInnerBox>
          <Text color="#5B5D6C">
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
  justify-content: space-between;
  margin: 0 8.12rem;
  padding: 3.56rem 2rem 3.43rem;
  border-top: 1px solid #a4abbe;
`
const Text = styled.span<StyleProps>`
  display: ${({ display }) => (display ? display : 'block')};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: 1rem;
  color: ${({ color }) => (color ? color : '#000')};
`
