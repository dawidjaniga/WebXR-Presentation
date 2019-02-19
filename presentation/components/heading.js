import React from 'react'
import { Heading } from 'spectacle'
import styled from 'styled-components'
import Prefix from './prefix'

const Wrapper = styled.div`
  margin-bottom: 2em
`

const HeadingComponent = ({ children, prefix = true, ...props }) => {
  return (
    <Wrapper>
      <Heading {...props}>
        {prefix && <Prefix>//&nbsp;</Prefix>}
        {children}
      </Heading>
    </Wrapper>
  )
}

export default HeadingComponent
