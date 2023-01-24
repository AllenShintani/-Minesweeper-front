import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { getRandomInt } from '../component/func'
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
  RedBomber,
  Bomber,
  OpenEight,
  OpenFive,
  OpenFour,
  OpenOne,
  OpenSeven,
  OpenSix,
  OpenThree,
  OpenTwo,
} from '../../styles/css'
import { number } from 'prop-types'

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
  //ゲームスタート！
  const isBoard: number[][] = JSON.parse(JSON.stringify(board))
  const [bombs, setBombs] = useState<{ [key: number]: number }>({ 11: 0 })
  const [countBomb, setCountBomb] = useState<number>(0)
  function restart() {
    let bombNum = 0
    //二次元配列を１次元として格納
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (getRandomInt(100) < 16) {
          //2はbombs
          bombs[i * 10 + j] = -2
          bombNum += 1
        } else {
          bombs[i * 10 + j] = 0
        }
        //ここでオープンしたセルをリセット
        isBoard[j][i] = 0
      }
    }
    setCountBomb(bombNum)
    setBoard(isBoard)
    return console.log(bombs)
  }

  //盤面をたたいた時の処理
  const hit = (x: number, y: number) => {
    const isBoard: number[][] = JSON.parse(JSON.stringify(board))

    //叩いたのはボムか？
    function judge(tap: number) {
      console.log(bombs)
      console.log(tap)
      if (bombs[tap] === -2) {
        for (let i = 0; i < 89; i++) {
          if (bombs[i] === -2) {
            isBoard[i % 10][Math.floor(i / 10)] = -2
          }
        }
        isBoard[y][x] = -1
        return
      } else {
        //ボム以外を踏んだ時の処理
        return addCell()
      }
    }

    //四隅などの例外処理消すためにセルの行列を便宜上増やす
    function addCell() {
      /* for (let i = 0; i < 10; i++) {
        bombs[9 + i * 10] = 0
        bombs[90 + i] = 0
      }*/
      return arroundBomb(x * 10 + y)
    }

    function arroundBomb(tap: number) {
      //周囲を列挙
      const bombsLists = [
        tap - 1,
        tap + 1,
        tap + 10,
        tap - 10,
        tap + 11,
        tap - 11,
        tap + 9,
        tap - 9,
      ]
      let bombCount = 0
      bombsLists.forEach((exprosion) => {
        if (bombs[exprosion] !== undefined) {
          if (bombs[exprosion] === -2) {
            bombCount += 1
          }
        }
      })
      isBoard[y][x] = bombCount
      //周囲にボムが全くなかった場合
      if (bombCount === 0) {
        isBoard[Math.floor(tap / 10)][tap % 10] = 9
        console.log(tap)
        bombsLists.forEach((t) => {
          console.log(Math.floor(t / 10))
          console.log(t % 10)
          //配列に存在しない値を比較することを回避
          if (
            Math.floor(t / 10) < 9 &&
            Math.floor(t / 10) > -1 &&
            t % 10 < 9 &&
            t % 10 > -1
          ) {
            console.log('f')

            if (isBoard[Math.floor(t / 10)][t % 10] === 0) {
              console.log(isBoard[Math.floor(t / 10)][t % 10])
              arroundBomb(t)
            }
          }
        })
      }
    }

    console.log(y, x)
    judge(x * 10 + y)
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
              <Faice onClick={() => restart()} />
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
                      <OpenOne />
                    ) : board[y][x] === 2 ? (
                      <OpenTwo />
                    ) : board[y][x] === 3 ? (
                      <OpenThree />
                    ) : board[y][x] === 4 ? (
                      <OpenFour />
                    ) : board[y][x] === 5 ? (
                      <OpenFive />
                    ) : board[y][x] === 6 ? (
                      <OpenSix />
                    ) : board[y][x] === 7 ? (
                      <OpenSeven />
                    ) : board[y][x] === 8 ? (
                      <OpenEight />
                    ) : board[y][x] === 9 ? (
                      <CellOpen />
                    ) : board[y][x] === -1 ? (
                      <RedBomber />
                    ) : (
                      <Bomber />
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
