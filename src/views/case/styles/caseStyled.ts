import styled from 'styled-components'
import theme from 'styles/theme'
import { ContainerStyled } from 'styles/common'

export const RepositoryStyled = styled.div`
  padding: 120px 0;
  /* background-repeat: no-repeat;
  background-image: url("//oe2c4fczn.bkt.clouddn.com/unsplash-fuse-brussels-white.jpg");
  background-size: 60% auto;
  background-position: bottom center;
  padding-bottom: 200px; */
`

export const CaseTitleStyled = styled.h1`
  font-size: 20px;
  color: ${theme.colors.black};
  text-align: right;
  padding: 12px 50px  12px 0;
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

  h2{
    font-size: 18px;
  }
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

export const EndStyled = styled(ContainerStyled)`
  text-align: center;
  img {
    vertical-align: bottom;
  }
`