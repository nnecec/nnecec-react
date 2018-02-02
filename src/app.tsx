import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'mobx-react';

import Root from './views/root';
import stores from './store';



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
