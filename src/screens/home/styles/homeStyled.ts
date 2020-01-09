import styled from 'styled-components'
import { color } from 'styles/common'

const introJPG = require('../../../assets/bench-accounting.jpg')


export const IntroStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url(${introJPG}); */
  background-size: cover;
  background-position: center center;
`

export const MeStyled = styled.section`
  padding: 200px 0;
  color: ${color.textColor};
  line-height: 1.5;
  font-size: 14px;
`