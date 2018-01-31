import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { IntlProvider, addLocaleData } from 'react-intl';

import Root from './views/root';
import locale from './locales';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getLocale = this.getLocale.bind(this);
  }

  getLocale(lang?: string) {
    let result = {};
    console.log(lang);
    switch (lang) {
      case 'zh-CN':
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

    const appLocale = this.getLocale();



    return (
      <IntlProvider locale={appLocale.locale}
        messages={appLocale.messages}
        formats={appLocale.formats}>
        <BrowserRouter>
          <Root changeLocale={this.getLocale}></Root>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
