import styled from 'styled-components'
import theme from 'styles/theme'

const introJPG = require('../../../assets/frontend-book.jpg')

export const IntroStyled = styled.div`
  position: relative;
  display: flex;
`

export const IntroImageStyled = styled.div`
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 60%;
  display: inline-block;

  @media (max-width: 640px) {
    width: 100%;
  }
`

export const IntroTitleStyled = styled.div`
  height: 100%;
  width: 40%;
  display: inline-block;
  position: relative;
  /* background-color: ${theme.colors.snow}; */

  @media (max-width: 640px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: transparent;
  }
`

export const TitleStyled = styled.div`
  background-color: ${theme.colors.silver};
  color: ${theme.colors.white};
  display: inline-block;
  position: absolute;
  top: 70%;
  right: 0;
  padding-left: 60px;
  width: 100%;

  @media (max-width: 640px) {
    width: 80%;
  }
`