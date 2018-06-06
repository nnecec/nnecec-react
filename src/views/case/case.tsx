import * as React from 'react';
import { FormattedDate, defineMessages } from 'react-intl';

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
      <div>
        <h2>Case</h2>

      </div>
    );
  }
}

export default Case;
