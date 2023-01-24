import React from 'react'
import {
  UpperFrame,
  StraitLine,
  LeftTop,
  RightTop,
  Bottom,
} from '../../styles/css'

export const Upperframe = () => {
  return (
    <UpperFrame>
      <LeftTop />
      <StraitLine />
      <RightTop />
    </UpperFrame>
  )
}

export const Underframe = () => {
  return (
    <UpperFrame>
      <Bottom />
      <StraitLine />
      <Bottom />
    </UpperFrame>
  )
}
