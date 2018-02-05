import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { IntlProvider, addLocaleData } from 'react-intl';

import locale from '../locales';

import Footer from '../components/footer';
import Header from '../components/header';
import Home from './home';
import Case from './case';
import About from './about';

import '../styles/app.css';

@inject('commonStore')
@withRouter
@observer
class Root extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.getLocale = this.getLocale.bind(this);
  }

  componentWillMount() {
    this.props.commonStore.setViewHeight(window.innerHeight);
  }

  getLocale(lang?: string) {
    let result: any = {};
    switch (lang) {
      case 'zh-Hans':
        result = locale['zh-Hans'];
        break;
      case 'en-US':
        result = locale['en-US'];
        break;
      default:
        result = locale['en-US'];
    }
    addLocaleData(result.data);

    return result.default || result;
  }

  public render() {
    const lang = this.props.commonStore.locale;
    const appLocale = this.getLocale(lang);

    return (
      <IntlProvider locale={appLocale.locale}
        messages={appLocale.messages}
        formats={appLocale.formats}>
        <div className="viewport">
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/case" component={Case} />
            <Route path="/about" component={About} />
          </Switch>

          <Footer></Footer>
        </div>
      </IntlProvider>

    );
  }
}


export default Root;
