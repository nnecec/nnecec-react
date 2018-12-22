import styled from 'styled-components'
import theme from 'styles/theme'

export const LoaderStyled = styled.div`
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackgroundWrapStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const BackgroundStyled = styled.div`
  width: ${100 / 5}%;
  height: 100%;
  background-color: ${theme.colors.dark};
  display: inline-block;
`

export const ItemWrapStyled = styled.div`
  color: ${theme.colors.smoke};
  overflow: hidden;
`

export const ItemStyled = styled.span`
  margin: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
`