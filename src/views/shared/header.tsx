import * as React from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import AdvancedStorage from '../../utils/advancedStorage';

@inject('commonStore')
@observer
class Header extends React.Component {
  storage: AdvancedStorage;

  constructor(props: React.ReactPropTypes) {
    super(props);

    this.storage = new AdvancedStorage('lang');
  }

  setLocale = (lang) => {
    this.props.commonStore.setLocale(lang);
    this.storage.setLocal(lang);
    this.forceUpdate();
  }


  render() {
    return (
      <header className="ec-header">
        <div className="header-background"></div>
        <div className="container">
          <nav className="ec-header-logo">
            <Link to="/" target="_self">nnecec</Link>
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
                  <button onClick={() => this.setLocale('zh-CN')}>中</button>
                }
                {
                  this.props.commonStore.locale === 'zh-CN' &&
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
