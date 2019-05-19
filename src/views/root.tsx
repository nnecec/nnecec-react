import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { IntlProvider, addLocaleData } from 'react-intl';
import Waypoint from 'react-waypoint'
import { hot } from 'react-hot-loader/root'

import locale from '../locales';

import Footer from './shared/footer';
import Header from './shared/header';
import Home from './home';
import Feature from './feature/feature';
import Resume from './resume/resume';

// 首屏加载
import Loader from './shared/loader'

import '../styles/app.css';
import { AppStyled } from '../styles/app';

@inject('routing', 'commonStore')
@withRouter
@observer
class Root extends React.Component<any, any> {
  constructor(props: object) {
    super(props);

  }

  componentWillMount () {
    const { commonStore, history }=this.props;
    commonStore.setViewHeight(window.innerHeight);
    history.listen(() => window.scrollTo(0, 0));
    // document.body.addEventListener('touchstart', function () { }, true);
  }

  getLocale=(lang: string='zh-CN') => {
    const result: any=locale[lang.toLowerCase()];
    addLocaleData(result.data);
    return result.default||result;
  }

  public render () {
    const { locale, isLoader }=this.props.commonStore
    const appLocale=this.getLocale(locale);

    return (
      <AppStyled>
        <IntlProvider locale={appLocale.locale}
          messages={appLocale.messages}
          formats={appLocale.formats}>

          <div className="viewport font-hei">
            {
              !isLoader&&<Loader />
            }
            <React.Fragment>
              <Header></Header>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Feature" component={Feature} />
                <Route path="/about" component={Resume} />
              </Switch>

              <Footer></Footer>
            </React.Fragment> :
          </div>
        </IntlProvider>
      </AppStyled>

    );
  }
}

export default hot(Root);
