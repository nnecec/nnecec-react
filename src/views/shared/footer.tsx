import * as React from 'react';
import { FormattedMessage } from 'react-intl'

import { FooterStyled, FooterVersionStyled, FooterSloganStyled, FooterIconStyled } from './styles/footerStyled'

const pkg = require('../../../package.json')

export default function (props) {
  return (
    <FooterStyled>
      <div className="container footer">
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
            tagName="span"
            id="footer.designed"
          />
        </FooterSloganStyled>
      </div>
    </FooterStyled >
  )
}
