import styled from 'styled-components'
import theme from 'styles/theme'

const introJPG = require('../../../assets/bench-accounting.jpg')


export const IntroStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${introJPG});
  background-size: cover;
  background-position: center center;
`

export const MeStyled = styled.section`
  padding: 160px 0;
  color: ${theme.colors.slate};
  line-height: 1.5;
  font-size: 14px;
`