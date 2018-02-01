import * as React from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import '../styles/header.css';


class Header extends React.Component {

  constructor(props: React.ReactPropTypes) {
    super(props);
  }

  render() {
    return (
      <header className="ec-header">
        <nav className="ec-header-logo">nnecec</nav>
        <nav className="ec-header-menu">
          <ul>
            <li>
              <FormattedMessage
                tagName="span"
                id="header.nav.home"
                defaultMessage="Home"
              />
            </li>
            <li>
              <FormattedMessage
                tagName="span"
                id="header.nav.case"
                defaultMessage="Case"
              />
            </li>
            <li>
              <FormattedMessage
                tagName="span"
                id="header.nav.about"
                defaultMessage="About"
              />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
