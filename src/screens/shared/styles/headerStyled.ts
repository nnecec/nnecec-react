import styled from 'styled-components'
import theme from 'styles/theme'
import { ContainerStyled } from 'styles/common'

export const HeaderStyled = styled.header`
  width: 100%;
  height: 120px;
  position: absolute;
`

export const HeaderBackgroundStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const HeaderWrapStyled = styled(ContainerStyled)`
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  height: 100%;
  align-items: center;
`

export const HeaderLogoStyled = styled.div`

`

export const HeaderNavStyled = styled.nav`
  ul {  
    display: flex;
    list-style: none;
    color: #333;
    font-size: 12px;

    li {
      line-height: 1.5;
      margin-right: 24px;

      button {
        background-color: transparent;
        line-height: 1.2;
      }
    }
  }
`
