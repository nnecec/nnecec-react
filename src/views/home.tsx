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
      <div>
        <section className="home-section" style={{ height }}>
          <p>nnecec</p>
        </section>
      </div>
    );
  }
}

export default Home;
