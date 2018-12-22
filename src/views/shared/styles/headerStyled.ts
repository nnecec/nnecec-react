import styled from 'styled-components'
import theme from 'styles/theme'
import { ContainerStyled } from 'styles/common'

export const HeaderStyled = styled.header`
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  height: 52px;
`

export const HeaderBackgroundStyled = styled.div`
  /* backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  transition-property: background-color, backdrop-filter, -webkit-backdrop-filter; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(255,255,255,0.7); */
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
      line-height: 20px;
      margin-right: 12px;

      button {
        background-color: transparent;
      }
    }
  }
`