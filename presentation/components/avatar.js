import React from 'react'
import { Heading } from 'spectacle'
import styled from 'styled-components'

const StyledImg = styled.img`
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,.2);
  box-shadow: 0px 7px 15px rgba(0,0,0,.9);
  width: ${props => props.width};
  max-width: 400px
`

const Avatar = ({ src, name, width }) => {
  return (
    <React.Fragment>
      <StyledImg src={src} width={width} />
      <Heading size={4}>{name}</Heading>
    </React.Fragment>
  )
}

export default Avatar
