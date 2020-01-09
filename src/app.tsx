import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Root from './screens/root'
import { StoreProvider } from './store'

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router basename="/">
        <Root></Root>
      </Router>
    </StoreProvider>
  )
}

export default App
