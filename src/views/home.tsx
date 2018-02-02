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
          <p>nnecec</p>
        </section>
        <section className="home-section me" style={{ height, marginTop: height }}>
          <p>nnecec</p>
        </section>
        <section className="home-section case" style={{ height }}>
          <p>nnecec</p>
        </section>
      </div>
    );
  }
}

export default Home;
