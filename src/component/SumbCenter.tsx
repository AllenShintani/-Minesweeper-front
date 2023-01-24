import React from 'react'
import {
  SubTopIndent,
  SubLeftIndent,
  SubRightIndent,
  SubCenter,
} from 'styles/css'
import { Counter } from './bloc'

export const Subcenter = () => {
  return (
    <>
      <SubTopIndent />
      <SubCenter>
        <SubLeftIndent />
        <SubRightIndent />
        <Counter />
      </SubCenter>
    </>
  )
}
