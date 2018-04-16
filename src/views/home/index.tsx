import * as React from 'react';
import { inject, observer } from 'mobx-react';
import NNecec from './nnecec';
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
        <section className="home-section me" style={{ height }}>
          <Me></Me>
        </section>
        <section className="home-section case" style={{ height }}>
          <div className="container">
            <p>nnecec</p>
          </div>
        </section>
      </div>
    );
  }
}



export default Home;
