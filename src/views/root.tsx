import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { IntlProvider, addLocaleData } from 'react-intl';
import Waypoint from 'react-waypoint'

import locale from '../locales';

import Footer from './shared/footer';
import Header from './shared/header';
import Home from './home';
import Case from './case/case';
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

  componentWillMount() {
    const { commonStore, history } = this.props;
    commonStore.setViewHeight(window.innerHeight);
    history.listen(() => window.scrollTo(0, 0));
    // document.body.addEventListener('touchstart', function () { }, true);
  }

  getLocale = (lang: string = 'zh-CN') => {
    const result: any = locale[lang.toLowerCase()];

    addLocaleData(result.data);

    return result.default || result;
  }

  handlePositionChange = (e) => {
    console.log(e)
  }


  public render() {
    const lang = this.props.commonStore.locale;
    const appLocale = this.getLocale(lang);

    return (
      <AppStyled>
        <IntlProvider locale={appLocale.locale}
          messages={appLocale.messages}
          formats={appLocale.formats}>

          {/* <Loader></Loader> */}

          <div className="viewport font-hei">
            <Header></Header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/case" component={Case} />
              <Route path="/about" component={Resume} />
            </Switch>

            <Footer></Footer>
          </div>
        </IntlProvider>
      </AppStyled>

    );
  }
}

export default Root;
