import * as React from 'react';
import { FormattedDate } from 'react-intl';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>
          Today is {' '}
          <FormattedDate value={Date.now()} />
        </p>
      </div>
    );
  }
}

export default Home;
