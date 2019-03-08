import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';



import { IntroStyled, IntroImageStyled, IntroTitleStyled, TitleStyled } from './styles/introStyled'

export default function Intro(props) {

  const { height } = props

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
  </IntroStyled >
  )

}