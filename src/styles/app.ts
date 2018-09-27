import styled from 'styled-components'
import theme from './theme'

export const AppStyled = styled.div`
  a {
    color: ${theme.colors.black};
    text-decoration: none;

    :not([target=_blank]) {
      color: ${theme.colors.primary};
      display: inline-block;
      position: relative;
      outline: 0;
      transition: all .2s ease-in-out;

      ::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${theme.colors.primary};

        opacity: 0;
        transition: all .3s;
        transform: translateY(-5px);
      }

      :hover {
        ::before {
          border-radius: 3px;
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  
}
`