import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '/assets/logo.svg'
import { ArtistTypes } from '../../components/artist/ArtistList'

export const ArtistListLayout = ({ allArtist }: { allArtist: ArtistTypes[] }) => {
  return (
    <Container>
      <TitleBox>
        <img src={logo} alt="로고" style={{ width: '7.25rem' }} />
        <TitleText>ARTIST</TitleText>
      </TitleBox>
      <ArtistContainer>
        {allArtist.map(({ id, genre, nickname, profileImage }) => (
          <Artistbox key={id} to={id + ''}>
            <Image src={profileImage} alt="작가 프로필 이미지" />
            <HoverElement className="HoverCover">
              <Cover />
              <Infobox>
                <Genre>{genre}</Genre>
                <Name>{nickname}</Name>
              </Infobox>
            </HoverElement>
          </Artistbox>
        ))}
      </ArtistContainer>
    </Container>
  )
}
const Container = styled.div`
  padding: 0 calc(100vw * 2.6 / 100);
`
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: calc(100vh * 5.83 / 100) 0 calc(100vh * 3.51 / 100);
  border-bottom: 1px solid #000;
`
const TitleText = styled.strong`
  margin-left: 1.5rem;
  font-size: 3.12rem;
`
const ArtistContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10.62rem, 1fr));
  gap: calc(100vh * 4.44 / 100) calc(100vw * 5.46 / 100);
  padding: calc(100vh * 9.81 / 100) 0;
`
const Artistbox = styled(Link)`
  width: 10.62rem;
  height: 10.62rem;
  position: relative;
  &:hover {
    .HoverCover {
      display: block;
    }
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const HoverElement = styled.div`
  width: inherit;
  height: inherit;
  display: none;
  position: absolute;
  top: 0;
`
const Cover = styled.div`
  background-color: var(--main2-green);
  opacity: 0.5;
  width: inherit;
  height: inherit;
`
const Infobox = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`
const Genre = styled.strong`
  margin-bottom: 0.43rem;
  font-size: 1.5rem;
  color: var(--white);
`
const Name = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
`
