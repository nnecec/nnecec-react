import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { observer } from 'mobx-react-lite'

import { hot } from 'react-hot-loader/root'

import localeConfig from '../locales'
import { useStore } from 'store'

import Footer from './shared/footer'
import Header from './shared/header'
import Home from './home'
import Feature from './feature/feature'
import Resume from './resume/resume'

// 首屏加载
import Loader from './shared/loader'

import '../styles/app.css'
import { AppStyled } from '../styles/app'

const Root: React.FC = observer(props => {
  const store = useStore()

  store.common.setViewHeight(window.innerHeight)
  // history.listen(() => window.scrollTo(0, 0))

  function getLocale (lang = 'zh-CN'): any {
    const result: any = localeConfig[lang.toLowerCase()]
    return result.default || result
  }

  const { locale, isLoader } = store.common
  const appLocale = getLocale(locale)

  return (
    <AppStyled>
      <IntlProvider
        locale={appLocale.locale}
        messages={appLocale.messages}
        formats={appLocale.formats}
        defaultLocale={navigator.language}
      >
        <div className="viewport font-hei">
          {!isLoader && <Loader />}
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Feature" component={Feature} />
              <Route path="/about" component={Resume} />
            </Switch>

            <Footer></Footer>
          </React.Fragment>{' '}
          :
        </div>
      </IntlProvider>
    </AppStyled>
  )
})

export default hot(Root)
