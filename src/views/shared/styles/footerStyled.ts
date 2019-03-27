import styled from 'styled-components'
import { color } from 'styles/common'

export const FooterStyled = styled.footer`
  bottom: 0;
  width: 100%;

  .footer{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    font-size: 12px;
    padding: 30px 0;
  }
`

export const FooterVersionStyled = styled.div`
  color: ${color.textColor}
`

export const FooterSloganStyled = styled.span`
  color: ${color.textColor};
`

export const FooterIconStyled = styled.a`
  margin-right: 10px;
`