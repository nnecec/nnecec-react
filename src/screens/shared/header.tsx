import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import { Trail, animated } from 'react-spring/renderprops'
import { useStore } from 'store'

import { HeaderStyled, HeaderBackgroundStyled, HeaderWrapStyled, HeaderNavStyled } from './styles/headerStyled'
import Logo from './logo'
import AdvancedStorage from '../../utils/advancedStorage'

export default function Header (): React.ReactElement {
  const storage = new AdvancedStorage('lang')
  const store = useStore()

  function setLocale (lang: string): void {
    store.common.setLocale(lang)
    storage.setLocal(lang)
  }

  const navItems = [
    <Link to="/" key="none">
      <FormattedMessage
        id="header.nav.home"
      />
    </Link>,
    <Link to="/feature" key="feature">
      <FormattedMessage
        id="header.nav.feature"
      />
    </Link>,
    <Link to="/about" key="about">
      <FormattedMessage
        id="header.nav.about"
      />
    </Link>,
    <React.Fragment key="fragment">
      {
        store.common.locale === 'en-US' &&
        <button onClick={(): void => setLocale('zh-CN')}>中</button>
      }
      {
        store.common.locale === 'zh-CN' &&
        <button onClick={(): void => setLocale('en-US')}>En</button>
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
              {(item) => ({ opacity, transform }) => (
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
