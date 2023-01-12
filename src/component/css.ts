import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
  padding: 0 0.5rem;
`

export const Game = styled.div`
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

export const UpperFrame = styled.div`
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
export const LeftTop = styled.div`
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
export const StraitLine = styled.div`
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
export const RightTop = styled.div`
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

export const CenterBox = styled.div`
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
export const Vertical = styled.div`
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
export const MainBox = styled.div`
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

export const Cell = styled.div`
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
export const CellOpen = styled.div`
  width: 24px;
  height: 24px;
  font-size: 10px;
  line-height: 23px;
  background-image: url(https://minesweeper.online/img/skins/hd/type0.svg?v=3);
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

export const Bottom = styled.div`
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
