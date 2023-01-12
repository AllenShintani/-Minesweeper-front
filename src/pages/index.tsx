import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Button from '@mui/material/Button'
import { TableRow } from '@mui/material'
import { rootShouldForwardProp } from '@mui/material/styles/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
  padding: 0 0.5rem;
`

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`

const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  line-height: 1.15;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`

const Code = styled.code<{ bgColor: string }>`
  padding: 0.75rem;
  font-family: Menlo, 'Monaco, Lucida Console', 'Liberation Mono',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace;
  font-size: 1.1rem;
  background: ${(props) => props.bgColor};
  border-radius: 5px;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin-top: 3rem;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`

const Card = styled.a`
  width: 45%;
  padding: 1.5rem;
  margin: 1rem;
  color: inherit;
  text-align: left;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
  h2 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  a {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`

const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`
const Game = styled.div`
  display: block;
  border-spacing: 0;
  width: 282px;
  filter: brightness(100%);
  float: left !important;
  border-collapse: separate;
  text-indent: initial;
  user-select: none;
  font-weight: 400;
  font-family: 'OpenSans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`

const UpperFrame = styled.div`
  width: 252px;
  height: 16.5px;
  box-sizing: border-box;
  display: block;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  text-indent: initial;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  background-color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`
const LeftTop = styled.div`
  width: 18px;
  height: 16.5px;
  background-image: url(https://minesweeper.online/img/skins/hd/corner_up_left_2x.png?v=3);
  float: left;
  background-size: 100% 100%;
  box-sizing: border-box;
  display: block;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  text-indent: initial;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  background-color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`
const StraitLine = styled.div`
  width: 216px;
  height: 16.5px;
  background-image: url(https://minesweeper.online/img/skins/hd/border_hor_2x.png?v=3);
  background-size: 100% 100%;
  float: left;
  box-sizing: border-box;
  display: block;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  text-indent: initial;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  background-color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`
const RightTop = styled.div`
  width: 18px;
  height: 16.5px;
  background-image: url(https://minesweeper.online/img/skins/hd/corner_up_right_2x.png?v=3);
  float: left;
  background-size: 100% 100%;
  box-sizing: border-box;
  display: block;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  text-indent: initial;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`

const CenterBox = styled.div`
  width: 252px;
  height: 216px;
  box-sizing: border-box;
  display: block;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  text-indent: initial;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`
const Vertical = styled.div`
  width: 18px;
  height: 216px;
  background-image: url(https://minesweeper.online/img/skins/hd/border_vert_2x.png?v=3);
  background-size: 100% 100%;
  float: left;
  box-sizing: border-box;
  display: block;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  text-indent: initial;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`
const MainBox = styled.div`
  float: left !important;
  display: block;
  box-sizing: border-box;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`

const Cell = styled.div`
  width: 24px;
  height: 24px;
  font-size: 10px;
  line-height: 23px;
  background-image: url(https://minesweeper.online/img/skins/hd/closed.svg?v=3);
  float: left;
  background-size: 100%;
  font-weight: 700;
  text-align: center;
  box-sizing: border-box;
  display: block;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  text-indent: initial;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`

const Bottom = styled.div`
  width: 18px;
  height: 16.5px;
  background-image: url(/img/skins/hd/corner_bottom_left_2x.png?v=3);
  float: left;
  background-size: 100% 100%;
  box-sizing: border-box;
  display: block;
  border-collapse: separate;
  user-select: none;
  border-spacing: 0;
  text-indent: initial;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
`

function createData(x: number, y: number) {
  return { x, y }
}

const HomePage: NextPage = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])

  const rows: {
    x: number
    y: number
  }[] = [createData(0, 31), createData(1, 86)]

  return (
    <Container>
      <Game>
        <UpperFrame>
          <LeftTop />
          <StraitLine />
          <RightTop />
        </UpperFrame>
        <CenterBox>
          <Vertical />
          <MainBox>
            {board.map((row, y) => (
              <Cell key={y}>
                {row.map((line, x) => (
                  <Cell key={x} />
                ))}
              </Cell>
            ))}
          </MainBox>
          <Vertical />
        </CenterBox>
        <UpperFrame>
          <Bottom />
          <StraitLine />
          <Bottom />
        </UpperFrame>
      </Game>
    </Container>
  )
}

export default HomePage
