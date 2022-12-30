import React from 'react'
import styled from 'styled-components'

export const Lazy = () => {
  console.log('hi')
  return <Container>Lazy</Container>
}
const Container = styled.div`
  background: var(--sub-blue);
  width: 100vh;
  height: 100vh;
`
