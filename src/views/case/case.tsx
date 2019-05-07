import * as React from 'react'
import { inject, observer } from 'mobx-react'

import Intro from './intro'
import Repositories from './repositories'
import End from './end'

@inject('commonStore')
@observer
export default class Case extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="case">

        <Intro height={this.props.commonStore.viewHeight} />

        <Repositories />
      </div>
    );
  }
}

