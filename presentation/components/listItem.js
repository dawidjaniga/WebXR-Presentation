import React from 'react'
import styled from 'styled-components'

const StyledList = styled.li`
  counter-increment: my-awesome-counter;
  margin-bottom: 1em;
  line-height: 1.5em;
  text-align: left;
  font-size: 1.5em;
  
  &::before {
    content: "0" counter(my-awesome-counter);
    font-size: 1.5em;
    font-family: 'Abril Fatface',serif;
    color: lime;
    margin-right: 1em;
    opacity: .5;
  }
`

const ListItemComponent = ({ children }) => {
  return (
    <StyledList>
      {children}
    </StyledList>
  )
}

export default ListItemComponent
