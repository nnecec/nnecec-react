import * as React from 'react';
import {
  FormattedNumber,
  FormattedPlural,
} from 'react-intl';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        <p>
            You have {' '}
            <FormattedNumber value={1000} /> {' '}
            <FormattedPlural value={1000}
                one="message"
                other="messages"
            />.
        </p>
      </div>
    );
  }
}

export default Footer;
