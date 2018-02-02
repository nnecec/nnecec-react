import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Footer from '../components/footer';
import Header from '../components/header';
import Home from './home';
import Case from './case';
import About from './about';

import '../styles/app.css';

@inject('commonStore')
@withRouter
@observer
class Root extends React.Component {

  componentWillMount() {
    this.props.commonStore.setViewHeight(window.innerHeight);
  }
  public render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/case" component={Case} />
          <Route exact path="/about" component={About} />
        </Switch>

        {/* <Footer></Footer> */}
      </div>
    );
  }
}


export default Root;
