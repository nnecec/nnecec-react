import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Trail, config } from 'react-spring'

import AdvancedStorage from '../../utils/advancedStorage'

const navItems = [{
  link: '/',
  id: 'header.nav.home'
}, {
  link: '/case',
  id: 'header.nav.case'
}, {
  link: '/about',
  id: 'header.nav.about'
},]

@inject('commonStore')
@observer
class Header extends React.Component {
  storage: AdvancedStorage

  constructor(props: React.ReactPropTypes) {
    super(props)
    this.storage = new AdvancedStorage('lang')
  }

  setLocale = (lang) => {
    this.props.commonStore.setLocale(lang)
    this.storage.setLocal(lang)
    this.forceUpdate()
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
              <Trail
                from={{ opacity: 0, transform: 'translateY(10px)' }}
                to={{ opacity: 1, transform: 'translateY(0)' }}
                keys={navItems.map(nav => nav.id)}
              >
                {
                  navItems.map(nav => styles =>
                    <li style={styles}>
                      <Link to={nav.link}>
                        <FormattedMessage
                          tagName="span"
                          id={nav.id}
                        />
                      </Link>
                    </li>
                  )
                }

              </Trail>
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
    )
  }
}

export default Header
