import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
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
  SubBox,
  SubCenter,
  SubLeftIndent,
  SubMain,
  SubRightIndent,
  SubTopIndent,
  ShortVertical,
  CountZero,
  CounterLeft,
  CounterLeftIndent,
  Faice,
  CounterMain,
  CounterRight,
  CounterTopIndent,
  InCounterIndent,
  FaiceBox,
} from '../../styles/css'

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
  const hit = (x: number, y: number) => {
    const isBoard: number[][] = JSON.parse(JSON.stringify(board))

    //isBoard[y][x]がクリックした座標を変化
    isBoard[y][x] = 1

    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max)
    }

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
        <SubBox>
          <ShortVertical />
          <SubMain>
            <SubTopIndent />
            <SubCenter>
              <SubLeftIndent />
              <SubRightIndent />
              <CounterLeft>
                <CounterTopIndent />
                <CounterMain>
                  <InCounterIndent />
                  <CountZero />
                  <InCounterIndent />
                  <CountZero />
                  <InCounterIndent />
                  <CountZero />
                </CounterMain>
              </CounterLeft>
              <CounterRight>
                <CounterTopIndent />
                <CounterMain>
                  <InCounterIndent />
                  <CountZero />
                  <InCounterIndent />
                  <CountZero />
                  <InCounterIndent />
                  <CountZero />
                </CounterMain>
              </CounterRight>
            </SubCenter>
            <FaiceBox>
              <Faice />
            </FaiceBox>
          </SubMain>
          <ShortVertical />
        </SubBox>
        <UpperFrame>
          <Bottom />
          <StraitLine />
          <Bottom />
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
                    {board[y][x] === 0 ? (
                      <Cell />
                    ) : board[y][x] === 1 ? (
                      <CellOpen />
                    ) : (
                      <Cell />
                    )}
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
