import * as React from 'react';
import { FormattedDate } from 'react-intl';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
class Case extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Case</h2>
        <button onClick={this.props.commonStore.increase}>increase</button>

        <span>{this.props.commonStore.number}</span>

        <button onClick={this.props.commonStore.decrease}>decrease</button>
      </div>
    );
  }
}

export default Case;
