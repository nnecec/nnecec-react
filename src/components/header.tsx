import * as React from 'react';
import {
  FormattedMessage,
  FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelative,
  FormattedNumber,
  FormattedPlural,
} from 'react-intl';
import '../styles/header.css';

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.changeLocale = this.changeLocale.bind(this)
  }


  changeLocale() {
    this.props.changeLocale('en-US')
    this.forceUpdate()
  }
  render() {
    return (
      <header className="ec-header">
        <button onClick={this.changeLocale}>en</button>
        <nav className="ec-header-logo">nnecec</nav>
        <nav className="ec-header-menu">
          <ul>
            <li>Home
            <FormattedMessage
                tagName="p"
                id="page.localeProvider.react"
                values={{
                  name: 'React',
                }}
                defaultMessage="{name} 是一个用于构建用户界面的 JAVASCRIPT 库。"
                description="{name} 是什么？"
              />
            </li>
            <li>Case</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
