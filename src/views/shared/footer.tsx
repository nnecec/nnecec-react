import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import { FooterStyled, FooterVersionStyled, FooterSloganStyled, FooterIconStyled, FooterContainerStyled } from './styles/footerStyled'

import pkg from '../../../package.json'

export default function Footer (): React.ReactElement {
  return (
    <FooterStyled>
      <FooterContainerStyled>
        <FooterVersionStyled>
          {pkg.version}
        </FooterVersionStyled>

        <FooterSloganStyled>

          <div style={{ marginBottom: 12 }}>
            <FooterIconStyled href="//github.com/nnecec" target="_blank">
              <img src={require('assets/github.svg')} width="20" />
            </FooterIconStyled>
            <FooterIconStyled href="//weibo.com/4srel" target="_blank">
              <img src={require('assets/weibo.svg')} width="20" />
            </FooterIconStyled>
            <FooterIconStyled href="//douban.com/people/shi1125" target="_blank">
              <img src={require('assets/douban.svg')} width="17" />
            </FooterIconStyled>
            <FooterIconStyled href="//twitter.com/nnecolly" target="_blank">
              <img src={require('assets/twitter.svg')} width="20" />
            </FooterIconStyled>
            <FooterIconStyled href="//instagram.com/nnecec" target="_blank">
              <img src={require('assets/instagram.svg')} width="20" />
            </FooterIconStyled>
          </div>

          <FormattedMessage
            id="footer.designed"
          />
        </FooterSloganStyled>
      </FooterContainerStyled>
    </FooterStyled >
  )
}
