import * as React from 'react';
import {
  FormattedMessage,
} from 'react-intl'

import { FooterStyled } from './styles/footerStyled'

const pkg = require('../../../package.json')

export default class Footer extends React.Component {
  render() {
    return (
      <FooterStyled>
        <div className="container footer">
          <span className="version">
            <span className="theme">Blue</span> {pkg.version}
          </span>
          <span className="designed">
            <FormattedMessage
              tagName="span"
              id="footer.designed"
            />
          </span>
        </div>
      </FooterStyled>
    )
  }
}
