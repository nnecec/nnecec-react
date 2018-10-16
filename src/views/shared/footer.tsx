import * as React from 'react';
import { FormattedMessage } from 'react-intl'
import { Spring, Keyframes } from 'react-spring'

import { FooterStyled, FooterVersionStyled, FooterSloganStyled, FooterIconStyled } from './styles/footerStyled'
import theme from 'styles/theme'

const pkg = require('../../../package.json')

const githubSVG = require('../../assets/github.svg')
const weiboSVG = require('../../assets/weibo.svg')
const twitterSVG = require('../../assets/twitter.svg')
const instagramSVG = require('../../assets/instagram.svg')


const Version = Keyframes.Spring({
  peek: [{ to: { transform: `scale(${1}, 1)`, color: '#fff', opacity: 1, x: 0 } }, { to: { transform: `scale(${0}, 1)`, color: theme.colors.primary, opacity: 0, x: -20 } }],
  show: [{ to: { transform: `scale(${1}, 1)`, color: '#fff', opacity: 1, x: 0 } }, { to: { transform: `scale(${1}, 1)` } }],
  hide: [{ to: { transform: `scale(${1}, 1)` } }, { to: { transform: `scale(${0}, 1)`, color: theme.colors.primary, opacity: 0, x: -20 } }],
})

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
          <FooterVersionStyled
            onPointerEnter={() => this.toggleVersionStyle('show')}
            onPointerLeave={() => this.toggleVersionStyle('hide')}
          >
            <Version config={{ tension: 100, friction: 20 }} state={versionState}>
              {styles =>
                <React.Fragment>
                  <div className="bg" style={styles}></div>
                  <div className="version" style={{ color: styles.color }}>Blue
                    <span style={{ opacity: styles.opacity, transform: `translateX(${styles.x}px)` }}> {pkg.version}</span>
                  </div>
                </React.Fragment>
              }
            </Version>
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
