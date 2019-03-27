import styled from 'styled-components'
import theme from './theme'
import { color } from './common'

export const AppStyled = styled.div`
  background-color: ${color.bgColor}

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
    color: ${color.textColor};
    background-color: ${color.textColor};
    border-color: ${color.textColor};

    &:hover, &:focus {
      color: ${color.primary};
      border-color: ${color.primary};
    }
  }

  ::selection {
    background: ${theme.colors.accent};
  }

  a {
    color: ${color.textColor};
    text-decoration: none;

    :not([target]) {
      color: ${color.textColor};
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
        background-color: ${color.textColor};

        opacity: 0;
        transition: all .3s;
        transform: translateY(-5px);
      }

      :hover {
        color: ${color.primary};
        ::before {
          background-color: ${color.primary};
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

  p{
    color: ${color.textColor};
    line-height: 1.5;
  }
}
`
