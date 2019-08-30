import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Root from './views/root'
import { StoreProvider } from './store'

export default function App (): React.ReactElement {
  return (
    <StoreProvider>
      <Router basename="/">
        <Root></Root>
      </Router>
    </StoreProvider>
  )
}
