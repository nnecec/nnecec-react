import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { IntroStyled, MeStyled } from './styles/homeStyled'
import Me from './me';

export interface HomeProps {
  commonStore: any
}
@inject('commonStore')
@observer
export default class Home extends React.Component<HomeProps, any> {

  render() {
    const { commonStore } = this.props;

    return (
      <div className="home">
        <IntroStyled style={{ height: commonStore.viewHeight }} />
        <MeStyled>
          <Me></Me>
        </MeStyled>
      </div >
    );
  }
}
