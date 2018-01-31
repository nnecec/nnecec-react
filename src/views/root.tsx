import * as React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Home from './home';

import '../styles/app.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header changeLocale={this.props.changeLocale}></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
