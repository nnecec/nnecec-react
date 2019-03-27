import * as React from 'react';
import { FormattedMessage } from 'react-intl'

import { FooterStyled, FooterVersionStyled, FooterSloganStyled, FooterIconStyled } from './styles/footerStyled'

const pkg = require('../../../package.json')

const githubSVG = require('../../assets/github.svg')
const weiboSVG = require('../../assets/weibo.svg')
const twitterSVG = require('../../assets/twitter.svg')
const instagramSVG = require('../../assets/instagram.svg')


export default class Footer extends React.Component<any, any> {

  state = {
    versionState: 'peek'
  }


  toggleVersionStyle = (state) => {
    this.setState({ versionState: state })
  }

  render() {
    const { versionState } = this.state

    return (
      <FooterStyled>
        <div className="container footer">
          <FooterVersionStyled>
            {pkg.version}
          </FooterVersionStyled>

          <FooterSloganStyled>

            <div style={{ marginBottom: 6 }}>
              <FooterIconStyled href="//github.com/nnecec" target="_blank">
                <img src={githubSVG} width="20" />
              </FooterIconStyled>
              <FooterIconStyled href="//weibo.com/4srel" target="_blank">
                <img src={weiboSVG} width="20" />
              </FooterIconStyled>
              <FooterIconStyled href="//twitter.com/nnecolly" target="_blank">
                <img src={twitterSVG} width="20" />
              </FooterIconStyled>
              <FooterIconStyled href="//instagram.com/nnecec" target="_blank">
                <img src={instagramSVG} width="20" />
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
}
