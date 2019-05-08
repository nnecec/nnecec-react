import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Trail, animated } from 'react-spring/renderprops'


import { HeaderStyled, HeaderBackgroundStyled, HeaderWrapStyled, HeaderNavStyled } from './styles/headerStyled'
import Logo from './logo'
import AdvancedStorage from '../../utils/advancedStorage'


interface HeaderProps {
  commonStore: any
}

@inject('commonStore')
@observer
export default class Header extends React.Component<HeaderProps, any> {
  storage: AdvancedStorage

  constructor(props: HeaderProps) {
    super(props)
    this.storage=new AdvancedStorage('lang')
  }

  setLocale=(lang) => {
    this.props.commonStore.setLocale(lang)
    this.storage.setLocal(lang)
  }


  render () {

    const navItems=[
      <Link to="/">
        <FormattedMessage
          tagName="span"
          id="header.nav.home"
          defaultMessage="Home"
        />
      </Link>,
      <Link to="/case">
        <FormattedMessage
          tagName="span"
          id="header.nav.case"
          defaultMessage="Case"
        />
      </Link>,
      <Link to="/about">
        <FormattedMessage
          tagName="span"
          id="header.nav.about"
          defaultMessage="About"
        />
      </Link>,
      <React.Fragment>
        {
          this.props.commonStore.locale==='en-US'&&
          <button onClick={() => this.setLocale('zh-CN')}>中</button>
        }
        {
          this.props.commonStore.locale==='zh-CN'&&
          <button onClick={() => this.setLocale('en-US')}>En</button>
        }
      </React.Fragment>
    ]

    return (
      <HeaderStyled>
        <HeaderBackgroundStyled />
        <HeaderWrapStyled>
          <nav className="ec-header-logo">
            <Link to="/" target="_self"><Logo width={24} /></Link>
          </nav>
          <HeaderNavStyled>
            <ul>
              <Trail
                items={navItems}
                keys={navItems.map((_, i) => i)}
                from={{ opacity: 0, transform: 'translateY(-12px)' }}
                to={{ opacity: 1, transform: 'translateY(0)' }}
              >
                {item => ({ opacity, transform }) => (
                  <animated.li
                    style={{
                      opacity,
                      transform
                    }}
                  >{item}</animated.li>
                )}
              </Trail>

            </ul>
          </HeaderNavStyled>
        </HeaderWrapStyled>
      </HeaderStyled>
    )
  }
}
