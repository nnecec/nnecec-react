import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'

import { IntroStyled, IntroImageStyled, IntroTitleStyled, TitleStyled } from './styles/introStyled'

type IntroProps = {
  height: number;
}

const Intro: React.FC = (props: IntroProps) => {
  const { height } = props

  return (<IntroStyled style={{ height: `${height * 0.8}px` }}>
    <IntroImageStyled />
    <IntroTitleStyled>
      <TitleStyled>
        <FormattedHTMLMessage
          tagName="p"
          id="header.nav.feature"
        />
      </TitleStyled>
    </IntroTitleStyled>
  </IntroStyled >
  )
}

export default Intro
