import React from 'react'
import styled from 'styled-components'

interface ArtworkHeaderLayoutProps {
  filterHandler: (genre: string) => void
  filterImg: string
}

export const ArtworkHeaderLayout = ({ filterHandler, filterImg }: ArtworkHeaderLayoutProps) => {
  return (
    <Container>
      <Button
        color={filterImg === 'all' ? 'var(--main2-green)' : 'var(--black-300)'}
        onClick={() => filterHandler('all')}
      >
        #ALL
      </Button>
      <Button
        color={filterImg === 'visual' ? 'var(--main2-green)' : 'var(--black-300)'}
        onClick={() => filterHandler('visual')}
      >
        #VISUAL
      </Button>
      <Button
        color={filterImg === 'media' ? 'var(--main2-green)' : 'var(--black-300)'}
        onClick={() => filterHandler('media')}
      >
        #MEDIA
      </Button>
      <Button
        color={filterImg === 'living' ? 'var(--main2-green)' : 'var(--black-300)'}
        onClick={() => filterHandler('living')}
      >
        #LIVING
      </Button>
      <Button
        color={filterImg === 'fashion' ? 'var(--main2-green)' : 'var(--black-300)'}
        onClick={() => filterHandler('fashion')}
      >
        #FASHION
      </Button>
    </Container>
  )
}
const Container = styled.div`
  position: absolute;
  top: 0;
  margin: 1.25vw 2.5vw;
  z-index: 9999;
`
const Button = styled.button<{ color: string }>`
  background-color: transparent;
  margin-right: 4.27vw;
  font-size: 1.48vh;
  color: ${({ color }) => color};
`
