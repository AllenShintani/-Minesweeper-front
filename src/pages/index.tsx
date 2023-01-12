import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Button from '@mui/material/Button'
import { TableRow } from '@mui/material'
import { rootShouldForwardProp } from '@mui/material/styles/styled'
import {
  Cell,
  Game,
  UpperFrame,
  LeftTop,
  Container,
  StraitLine,
  RightTop,
  CenterBox,
  MainBox,
  Vertical,
  Bottom,
  CellOpen,
} from '../component/css'

function createData(x: number, y: number) {
  return { x, y }
}

const HomePage: NextPage = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
  const hit = (x: number, y: number) => {
    const isBoard: number[][] = JSON.parse(JSON.stringify(board))
    isBoard[y][x] = 1
    console.log(x, y)
    setBoard(isBoard)
  }
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
                  <Cell
                    key={x}
                    onClick={() => hit(x, y)}
                  >
                    {board[y][x] === 0 ? <Cell /> : <CellOpen />}
                  </Cell>
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
