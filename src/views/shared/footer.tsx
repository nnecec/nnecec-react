import * as React from 'react';
import {
  FormattedMessage,
} from 'react-intl'

import { FooterStyled, FooterVersionStyled, FooterSloganStyled } from './styles/footerStyled'

const pkg = require('../../../package.json')

export default class Footer extends React.Component {
  render() {
    return (
      <FooterStyled>
        <div className="container footer">
          <span className="version">
            <FooterVersionStyled>Blue</FooterVersionStyled> {pkg.version}
          </span>
          <FooterSloganStyled>
            <FormattedMessage
              tagName="span"
              id="footer.designed"
            />
          </FooterSloganStyled>
        </div>
      </FooterStyled>
    )
  }
}
