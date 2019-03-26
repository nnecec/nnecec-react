import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import "regenerator-runtime/runtime"

// mobx
import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import store from './store'

import Root from './views/root'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()
const stores = {
  routing: routingStore,
  ...store,
}

const history = syncHistoryWithStore(browserHistory, routingStore);

export default function App() {
  return (
    <Provider {...stores}>
      <Router>
        <Root></Root>
      </Router>
    </Provider>
  )
}

