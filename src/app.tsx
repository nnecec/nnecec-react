import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

// mobx
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import store from './store';

import Root from './views/root';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
  // Key can be whatever you want
  routing: routingStore,
  ...store,
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {

    return (
      <Provider {...stores}>
        <BrowserRouter>
          <Root></Root>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
