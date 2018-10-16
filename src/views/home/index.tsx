import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { IntroStyled, MeStyled } from './styles/homeStyled'
import Me from './me';

@inject('commonStore')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commonStore } = this.props;
    const height = commonStore.viewHeight;
    return (
      <div className="home">
        <IntroStyled style={{ height }} />
        <MeStyled>
          <Me></Me>
        </MeStyled>
      </div >
    );
  }
}

export default Home;
