import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style: none;
  counter-reset: my-awesome-counter;
  margin: 0;
  padding: 0;
`

const List = ({ children }) => {
  return (
    <StyledList>
      {children}
    </StyledList>
  )
}

export default List
