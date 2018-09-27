import styled from 'styled-components'
import theme from 'styles/theme'

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

export const FooterVersionStyled = styled.span`
  font-weight: 500;
  color: ${theme.colors.primary};
`

export const FooterSloganStyled = styled.span`
  color: ${theme.colors.silver};
`

export const FooterIconStyled = styled.a`
  margin-right: 10px;
`