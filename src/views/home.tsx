import * as React from 'react';
import { inject, observer } from 'mobx-react';

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
          <div className="container">
            <p>nnecec</p>
          </div>
        </section>
        <section className="home-section me" style={{ height, marginTop: height }}>
          <div className="container">
            <p>Have fun, otherwise it's not worth it.</p>
            <p>快乐至死。</p>
          </div>
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
