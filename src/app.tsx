import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { IntlProvider, addLocaleData } from 'react-intl';

import Root from './views/root';
import locale from './locales';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en-US',
    };
    this.getLocale = this.getLocale.bind(this);
    this.changeLocale = this.changeLocale.bind(this);
  }

  getLocale(lang?: string) {
    let result = {};
    console.log(lang);
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

  changeLocale(): void {
    const { locale } = this.state;

    if (locale === 'en-US') {
      this.setState({
        locale: 'zh-Hans',
      });
    } else {
      this.setState({
        locale: 'en-US',
      });
    }
  }

  public render() {

    const appLocale = this.getLocale(this.state.locale);

    return (
      <IntlProvider locale={appLocale.locale}
        messages={appLocale.messages}
        formats={appLocale.formats}>
        <BrowserRouter>
          <Root></Root>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
