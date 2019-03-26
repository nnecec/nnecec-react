import styled from 'styled-components'
import theme from './theme'

export const AppStyled = styled.div`
  * {
    box-sizing: border-box;
    font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  }

  button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 2px 6px;
    font-size: 12px;
    border-radius: 4px;
    user-select: none;
    outline: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: ${theme.colors.black};
    background-color: ${theme.colors.snow};
    border-color: ${theme.colors.slate};

    &:hover, &:focus {
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  }

  ::selection {
    background: ${theme.colors.accent};
  }

  a {
    color: ${theme.colors.black};
    text-decoration: none;

    :not([target]) {
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

  figure {
    margin: 0;
    width: 100%;
  }
}
`
