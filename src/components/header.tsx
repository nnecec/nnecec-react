import * as React from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';


@inject('commonStore')
@observer
class Header extends React.Component {

  constructor(props: React.ReactPropTypes) {
    super(props);
    this.setLocale = this.setLocale.bind(this);
  }

  setLocale(lang) {
    this.props.commonStore.setLocale(lang);
    this.forceUpdate();
  }

  render() {
    return (
      <header className="ec-header">
        <div className="header-background"></div>
        <div className="container">
          <nav className="ec-header-logo">
            <Link to="/">nnecec</Link>
          </nav>
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
              <li>
                {
                  this.props.commonStore.locale === 'en-US' &&
                  <button onClick={() => this.setLocale('zh-Hans')}>中</button>
                }
                {
                  this.props.commonStore.locale === 'zh-Hans' &&
                  <button onClick={() => this.setLocale('en-US')}>En</button>
                }
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
