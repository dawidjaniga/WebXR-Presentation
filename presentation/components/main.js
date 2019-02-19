import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
z-index: 20;
width: 100%;
height: 100%;
position: absolute;
`

const Main = ({ children }) => {
  return (
    <StyledDiv>{children}</StyledDiv>
  )
}

export default Main
