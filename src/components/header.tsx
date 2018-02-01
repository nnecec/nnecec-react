import * as React from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import { Link } from 'react-router-dom';

import '../styles/header.css';


class Header extends React.Component {

  constructor(props: React.ReactPropTypes) {
    super(props);
  }

  render() {
    return (
      <header className="ec-header">
        <div className="container">
          <nav className="ec-header-logo">nnecec</nav>
          <nav className="ec-header-menu">
            <ul>
              <li>
                <Link to="/">
                  <FormattedMessage
                    tagName="span"
                    id="header.nav.home"
                    defaultMessage="Home"
                  />
                </Link>
              </li>
              <li>
                <Link to="/case">
                  <FormattedMessage
                    tagName="span"
                    id="header.nav.case"
                    defaultMessage="Case"
                  />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FormattedMessage
                    tagName="span"
                    id="header.nav.about"
                    defaultMessage="About"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
