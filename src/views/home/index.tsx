import * as React from 'react';
import { inject, observer } from 'mobx-react';
const { Parallax } = require('react-spring');

@inject('commonStore')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  scroll = to => this.refs.parallax.scrollTo(to);

  render() {
    const { commonStore } = this.props;
    const height = commonStore.viewHeight;
    return (
      <div className="home">
        <section className="home-section logo" style={{ height }}>
          <div className="container">
            <span className="font-hei title">nnecec</span>
          </div>
        </section>
        <section className="home-section me" style={{ height }}>
          <Parallax className="parallax-container" ref="parallax" pages={3} horizontal scrolling={false}>
            <Page offset={0} gradient="pink" caption="who we are" first="Lorem ipsum" second="dolor sit" onClick={() => this.scroll(1)} />
            <Page offset={1} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(2)} />
            <Page offset={2} gradient="tomato" caption="what we want" first="Morbi quis" second="est dignissim" onClick={() => this.scroll(0)} />
          </Parallax>
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

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </React.Fragment>
);

export default Home;
