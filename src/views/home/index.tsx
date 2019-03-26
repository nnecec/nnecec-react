import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Observer, useObservable } from 'mobx-react-lite';

import { IntroStyled, MeStyled } from './styles/homeStyled'
import Me from './me';

export default function Home(props) {
  const commonStore = useObservable({ height: 0 })
  return (
    <div className="home">
      <Observer>{() => <IntroStyled style={{ height: commonStore.height }} />}</Observer>

      <MeStyled>
        <Me></Me>
      </MeStyled>
    </div >
  )
}
