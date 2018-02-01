import * as React from 'react';
import { Route } from 'react-router-dom';

import Footer from '../components/footer';
import Header from '../components/header';
import Home from './home';
import Case from './case';
import About from './about';

import '../styles/app.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route path="/case" component={Case} />
        <Route path="/about" component={About} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
