import type { NextPage } from 'next'
import React from 'react'
import { useState } from 'react'
import { getRandomInt } from '../component/func'
import {
  Cell,
  Game,
  Container,
  CenterBox,
  MainBox,
  Vertical,
  CellOpen,
  SubBox,
  SubMain,
  ShortVertical,
  Faice,
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
import { Underframe, Upperframe } from 'src/component/Frame'
import { Subcenter } from 'src/component/SumbCenter'

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
  function restart() {
    //二次元配列を１次元として格納
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (getRandomInt(100) < 16) {
          //-2はbombs
          bombs[i * 10 + j] = -2
        } else {
          bombs[i * 10 + j] = 0
        }
        //ここでオープンしてあるセルをリセット
        isBoard[j][i] = 0
      }
    }
    setBoard(isBoard)
    return console.log(bombs)
  }

  //盤面をたたいた時の処理
  const hit = (x: number, y: number) => {
    const isBoard: number[][] = JSON.parse(JSON.stringify(board))

    //叩いたのはボムか？
    function judge(tap: number) {
      if (bombs[tap] === -2) {
        for (let i = 0; i < 82; i++) {
          if (bombs[i] === -2) {
            isBoard[i % 10][Math.floor(i / 10)] = -2
          }
        }
        isBoard[y][x] = -1
        return
      } else {
        //ボム以外を踏んだ時の処理
        return arroundBomb(x * 10 + y)
      }
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
      isBoard[tap % 10][Math.floor(tap / 10)] = bombCount
      //周囲にボムが全くなかった場合
      if (bombCount === 0) {
        isBoard[tap % 10][Math.floor(tap / 10)] = 9
        bombsLists.forEach((t) => {
          //配列に存在しない値を比較することを回避
          if (
            Math.floor(t / 10) < 9 &&
            Math.floor(t / 10) > -1 &&
            t % 10 < 9 &&
            t % 10 > -1
          ) {
            if (isBoard[t % 10][Math.floor(t / 10)] === 0) {
              arroundBomb(t)
            }
          }
        })
      }
    }

    const point = x * 10 + y
    judge(point)
    setBoard(isBoard)
  }

  return (
    <Container>
      <Game>
        <Upperframe />
        <SubBox>
          <ShortVertical />
          <SubMain>
            <Subcenter />
            <FaiceBox>
              <Faice onClick={() => restart()} />
            </FaiceBox>
          </SubMain>
          <ShortVertical />
        </SubBox>
        <Underframe />
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
        <Underframe />
      </Game>
    </Container>
  )
}

export default HomePage
