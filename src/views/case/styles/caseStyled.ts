import styled from 'styled-components'
import theme from 'styles/theme'

export const CaseTitleStyled = styled.h1`
  font-size: 18px;
  color: ${theme.colors.black};
  text-align: right;
  padding: 4px 50px  4px 0;
  @media screen and (max-width: 768px) {
    text-align: left;
    padding-right: 0;
  }
`

export const CaseRepoStyled = styled.div`
  color: ${theme.colors.slate};
  line-height: 1.5;
  font-size: 14px;
  margin-bottom: 80px;

  h3 {
    font-size: 16px;
    margin: 0 0 4px 0;
    color: ${theme.colors.black};
  }

  .tag {
    div {
      margin-right: 10px;
    }
  }
`