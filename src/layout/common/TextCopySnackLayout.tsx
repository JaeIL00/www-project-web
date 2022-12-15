import React from 'react'
import styled from 'styled-components'

interface TextCopySnackProps {
  isCopy: boolean
  word: string
}

export const TextCopySnackLayout = ({ isCopy, word }: TextCopySnackProps) => {
  return (
    <Container>
      <ClipBoardText animationName={isCopy ? 'clipboard-up' : ''} display={isCopy ? 'block' : 'none'}>
        <Text fontSize="0.9rem" color="var(--white)">
          {word} 클립보드에 복사했습니다.
        </Text>
      </ClipBoardText>
    </Container>
  )
}

interface styleTypes {
  display?: string
  fontSize?: string
  color?: string
  animationName?: string
}
const Container = styled.div`
  @keyframes clipboard-up {
    0% {
      bottom: -7.4vh;
    }
    20% {
      bottom: 0;
    }
    80% {
      bottom: 0;
    }
    100% {
      bottom: -7.4vh;
    }
  }
`
const ClipBoardText = styled.div<styleTypes>`
  background-color: #181818;
  width: 11vw;
  display: ${({ display }) => display};
  position: absolute;
  bottom: -7.4vh;
  margin: 1.85vh 1.04vw;
  padding: 1vh 0.62vw;
  border-radius: 0.3vw;
  animation: ${({ animationName }) => animationName} 3s ease-in-out forwards;
`
const Text = styled.span<styleTypes>`
  display: inline-block;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`
