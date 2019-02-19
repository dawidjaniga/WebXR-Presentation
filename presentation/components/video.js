import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video`
  height: ${props => props.height};
  width: ${props => props.width};
`

const Video = ({ src, width, height, subtitles = [], ...props }) => {
  return (
    <StyledVideo width={width} height={height} {...props}>
      <source src={src} type='video/mp4' />
      {subtitles.map(({ label, lang, file, isDefault = false }) =>
        <track label={label} kind='subtitles' srcLang={lang} src={file} default={isDefault} key={lang} />)
      }
    </StyledVideo>
  )
}

export default Video
