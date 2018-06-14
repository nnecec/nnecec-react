import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { FormattedDate, defineMessages } from 'react-intl';

import Repositories from './repositories';
@inject('commonStore')
@observer
class Case extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const messages = defineMessages({
      luoo: { id: 'case.luoo' },
    });
  }

  render() {
    return (
      <div className="case">

        <div style={{ height: `${this.props.commonStore.viewHeight}px` }}></div>
        <Repositories />
      </div>
    );
  }
}

export default Case;
