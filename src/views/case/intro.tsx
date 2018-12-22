import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';



import { IntroStyled, IntroImageStyled, IntroTitleStyled, TitleStyled } from './styles/introStyled'

export default class Intro extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { height } = this.props

    return (<IntroStyled style={{ height: `${height * 0.8}px` }}>
      <IntroImageStyled />
      <IntroTitleStyled>
        <TitleStyled>
          <FormattedHTMLMessage
            tagName="p"
            id="header.nav.case"
          />
        </TitleStyled>
      </IntroTitleStyled>
    </IntroStyled >)
  }
}