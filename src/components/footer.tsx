import * as React from 'react';
import {
  FormattedMessage,
} from 'react-intl';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container footer">
          <span className="theme">
            <FormattedMessage
              tagName="span"
              id="footer.designed"
            />
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
