import * as React from 'react'
import { inject, observer } from 'mobx-react'

import Intro from './intro'
import Repositories from './repositories'
import End from './end'

@inject('commonStore')
@observer
export default class Feature extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="feature">

        <Intro height={this.props.commonStore.viewHeight} />

        <Repositories />
      </div>
    );
  }
}

