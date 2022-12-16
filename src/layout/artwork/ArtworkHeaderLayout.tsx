import React from 'react'
import styled from 'styled-components'

interface ArtworkHeaderLayoutProps {
  filterHandler: (genre: string) => void
}

export const ArtworkHeaderLayout = ({ filterHandler }: ArtworkHeaderLayoutProps) => {
  return (
    <Container>
      <Button onClick={() => filterHandler('all')}>#ALL</Button>
      <Button onClick={() => filterHandler('visual')}>#VISUAL</Button>
      <Button onClick={() => filterHandler('media')}>#MEDIA</Button>
      <Button onClick={() => filterHandler('living')}>#LIVING</Button>
      <Button onClick={() => filterHandler('fashion')}>#FASHION</Button>
    </Container>
  )
}
const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 1.25vw 2.5vw;
  z-index: 9999;
`
const Button = styled.button`
  background-color: transparent;
  margin-right: 4.27vw;
  font-size: 0.83vw;
  color: var(--black-300);
`
