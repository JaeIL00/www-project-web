import React from 'react'
import styled from 'styled-components'
import warningIcon from '/assets/icon-warning.svg'

export const DownloadModalLayout = () => {
  return (
    <Container>
      <Topbox>
        <Dot backColor="#FF5F57"></Dot>
        <Dot backColor="#FEBC2E" marginLeft="calc(100vw * 0.41 / 100)"></Dot>
        <Dot backColor="#28C840" marginLeft="calc(100vw * 0.41 / 100)"></Dot>
      </Topbox>
      <Bottombox>
        <Contentbox>
          <img src={warningIcon} alt="warning-icon" />
          <Textbox>
            <Text fontSize="calc(100vh * 1.48 / 100)" marginBottom="calc(100vh * 0.78 / 100)">
              This is not an error.
            </Text>
            <Text fontSize="calc(100vh * 2.22 / 100)">Do you want www exhibition Book?</Text>
          </Textbox>
        </Contentbox>
        <Innerbox>
          <Circle>
            <Text fontSize="calc(100vh * 2.22 / 100)" fontWeight="500">
              ?
            </Text>
          </Circle>
          <div>
            <Button backColor="var(--white)" color="#252525" border="1px solid #c8c8c8">
              Cancel
            </Button>
            <Button backColor="linear-gradient(0deg, #258BFA 0%, #67AFF7 100%)" color="var(--white)">
              <a href="" download>
                Download
              </a>
            </Button>
          </div>
        </Innerbox>
      </Bottombox>
    </Container>
  )
}

interface styleType {
  backColor?: string
  marginBottom?: string
  marginLeft?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  border?: string
}
const Container = styled.div`
  width: calc(100vw * 34.34 / 100);
  height: calc(100vh * 24.72 / 100);
  position: absolute;
  left: calc(100vw * 33.42 / 100);
  bottom: calc(100vh * 34.16 / 100);
  z-index: 1;
`
const Text = styled.span<styleType>`
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
`
const Topbox = styled.div`
  background: linear-gradient(0deg, #d0d0d0 0%, #dfdfdf 100%);
  height: calc(100vh * 3.43 / 100);
  display: flex;
  align-items: center;
  padding-left: calc(100vw * 1.27 / 100);
  border-radius: calc(100vw * 0.41 / 100) calc(100vw * 0.41 / 100) 0 0;
  border-bottom: 2px solid #bfbfbf;
`
const Dot = styled.div<styleType>`
  background-color: ${({ backColor }) => backColor};
  width: calc(100vh * 1.11 / 100);
  height: calc(100vh * 1.11 / 100);
  margin-left: ${({ marginLeft }) => marginLeft};
  border-radius: 50%;
`
const Bottombox = styled.div`
  background-color: #ececec;
  padding: 0 calc(100vw * 1.69 / 100) calc(100vh * 3.24 / 100) calc(100vw * 1.87 / 100);
  border-radius: 0 0 calc(100vw * 0.41 / 100) calc(100vw * 0.41 / 100);
`
const Contentbox = styled.div`
  display: flex;
  padding: calc(100vh * 3.43 / 100) 0 calc(100vh * 2.72 / 100);
`
const Textbox = styled.div`
  margin-left: calc(100vh * 3.45 / 100);
`
const Innerbox = styled.div`
  display: flex;
  justify-content: space-between;
`
const Circle = styled.div`
  background-color: var(--white);
  width: calc(100vh * 3.03 / 100);
  height: calc(100vh * 3.03 / 100);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #c7c7c7;
  border-radius: 50%;
  box-shadow: 1px 1px 2px rgba(137, 137, 137, 0.37);
`

const Button = styled.button<styleType>`
  background: ${({ backColor }) => backColor};
  height: calc(100vh * 3.14 / 100);
  padding: 0 calc(100vh * 2.4 / 100);
  border: ${({ border }) => border};
  border-radius: calc(100vh * 0.4 / 100);
  font-size: calc(100vh * 2.02 / 100);
  color: #252525;
  a {
    color: var(--white);
  }
  &:last-child {
    margin-left: calc(100vh * 1.94 / 100);
  }
`
