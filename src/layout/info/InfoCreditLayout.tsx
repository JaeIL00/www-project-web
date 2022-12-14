import React from 'react'
import styled from 'styled-components'
import { CreditData1, CreditData2 } from '../../components/info/CreditData'
import { useAppDispatch } from '../../store/Store'
import { textCopyHandler, rebackHandler } from '../../store/InfoSlice'

export const InfoCreditLayout = () => {
  const dispatch = useAppDispatch()
  return (
    <InfoContainer>
      <TitleBox>
        <TitleText>CREDIT</TitleText>
      </TitleBox>
      <ContentsBox>
        <div style={{ width: 'calc(14.58vw - 6.24rem)' }}>
          <RoleList marginBottom="calc(100vh * 1.57 / 100)">
            <Square backColor="var(--lead-orange)"></Square>
            <Text marginLeft="1.87rem" color="#707070">
              Lead
            </Text>
          </RoleList>
          <RoleList marginBottom="calc(100vh * 1.57 / 100)">
            <Square backColor="var(--serve-blue)"></Square>
            <Text marginLeft="1.87rem" color="#707070">
              Serve
            </Text>
          </RoleList>
          <RoleList>
            <Square backColor="var(--assist-green)"></Square>
            <Text marginLeft="1.87rem" color="#707070">
              Assist
            </Text>
          </RoleList>
        </div>
        <MembersBox>
          <DirectorBox>
            <Text display="inline" color="#707070">
              Director
            </Text>
            <Text display="inline" marginLeft="calc(100vw * 1.66 / 100)">
              DISP
            </Text>
          </DirectorBox>
          <TeamsBox>
            {CreditData1.map(({ title, member }) => (
              <div key={title}>
                <Text color="#707070" paddingBottom="calc(100vh * 3.33 / 100)">
                  {title}
                </Text>
                <div>
                  {member.map(({ key, name, color, url, email }) => (
                    <Memberbox key={key}>
                      <Square backColor={color} marginRight="calc(100vw * 0.93 / 100)"></Square>
                      {url ? (
                        <LinkText href={url} target="_blank" rel="noreferrer">
                          {name}
                        </LinkText>
                      ) : null}
                      {email ? (
                        <Button
                          onClick={() => {
                            dispatch(textCopyHandler(email))
                            setTimeout(() => {
                              dispatch(rebackHandler())
                            }, 3000)
                          }}
                        >
                          {name}
                        </Button>
                      ) : null}
                      {!url && !email ? <Text color="#000">{name}</Text> : null}
                    </Memberbox>
                  ))}
                </div>
              </div>
            ))}
          </TeamsBox>
          <TeamsBox>
            {CreditData2.map(({ title, member }) => (
              <div key={title}>
                <Text color="#707070" paddingBottom="calc(100vh * 3.33 / 100)">
                  {title}
                </Text>
                <div style={{ display: 'flex' }}>
                  <div>
                    {member.map(({ key, name, color, url, email }) => (
                      <Memberbox key={key}>
                        <Square backColor={color} marginRight="calc(100vw * 0.93 / 100)"></Square>
                        {url ? (
                          <LinkText href={url} target="_blank" rel="noreferrer">
                            {name}
                          </LinkText>
                        ) : null}
                        {email ? (
                          <Button
                            onClick={() => {
                              dispatch(textCopyHandler(email))
                              setTimeout(() => {
                                dispatch(rebackHandler())
                              }, 3000)
                            }}
                          >
                            {name}
                          </Button>
                        ) : null}
                        {!url && !email ? <Text color="#000">{name}</Text> : null}
                      </Memberbox>
                    ))}
                  </div>
                  <div>
                    {member.map(({ part }, index) => (
                      <Partbox key={index}>
                        {part && (
                          <Text color="var(--black-100)" marginLeft="calc(100vw * 1.71 / 100)">
                            {part}
                          </Text>
                        )}
                      </Partbox>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </TeamsBox>
        </MembersBox>
        <div style={{ width: 'calc(14.58vw - 6.24rem)', textAlign: 'right' }}>
          <Text color="var(--black-200)">
            WWW
            <br />
            <br />
            TEAM
            <br />
            <br />
            12th
          </Text>
        </div>
      </ContentsBox>
    </InfoContainer>
  )
}

interface styleTypes {
  backColor?: string
  display?: string
  paddingBottom?: string
  marginRight?: string
  marginLeft?: string
  marginBottom?: string
  weight?: string
  color?: string
  textAlign?: string
}
const InfoContainer = styled.div`
  margin: 0 3.12rem;
}
`
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 3.51vh 0;
  border-bottom: 1px solid #000;
`
const TitleText = styled.strong`
  font-size: 4.62vh;
`
const ContentsBox = styled.div`
  display: flex;
  padding: 7.4vh 0;
`
const RoleList = styled.div<styleTypes>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`
const Square = styled.div<styleTypes>`
  background-color: ${({ backColor }) => backColor};
  width: 1.75vh;
  height: 1.75vh;
  margin-right: ${({ marginRight }) => marginRight};
`
const MembersBox = styled.div`
  flex-grow: 1;
`
const DirectorBox = styled.div<styleTypes>`
  text-align: center;
  margin-bottom: 3.51vh;
`
const TeamsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0 2vw;
  padding: 5.27vh 2.03vw 5.09vh 3.03vw;
  border-top: 1px solid var(--black-100);
`
const Memberbox = styled.div`
  display: flex;
  align-items: center;
  padding: 1.38vh 0;
`
const LinkText = styled.a`
  display: block;
  font-size: 1.48vh;
  color: #000;
  &:hover {
    color: var(--main2-green);
  }
`
const Partbox = styled.div`
  padding: 1.6vh 0;
`
const Button = styled.button`
  background: none;
  margin-left: -0.3vw;
  font-size: 1.48vh;
  &:hover {
    color: var(--main2-green);
  }
`
const Text = styled.span<styleTypes>`
  display: ${({ display }) => (display ? display : 'block')};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: 1.48vh;
  color: ${({ color }) => (color ? color : '#000')};
`
