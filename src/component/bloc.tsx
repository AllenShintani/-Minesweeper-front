import React from 'react'
import {
  CountZero,
  CounterLeft,
  CounterMain,
  CounterTopIndent,
  InCounterIndent,
  CounterRight,
} from '../../styles/css'
export const Counter = () => {
  return (
    <>
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
    </>
  )
}
