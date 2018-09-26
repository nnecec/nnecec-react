import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Me from './me';

@inject('commonStore')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commonStore } = this.props;
    const height = commonStore.viewHeight;
    return (
      <div className="home">
        <section className="home-section logo" style={{ height }}>
        </section>
        <section className="home-section me">
          <div className="container">
            <Me></Me>
          </div>
        </section>
        <section className="home-section case">
          
        </section>
      </div>
    );
  }
}

export default Home;
