import * as React from 'react';

const { Parallax } = require('react-spring');

class HomeParallax extends React.Component {

  scroll = to => this.refs.parallax.scrollTo(to);

  render() {
    return (

      <Parallax
        className="home-parallax"
        ref="parallax"
        pages={3}
        horizontal
        scrolling={false}>

        <React.Fragment>
          <Parallax.Layer offset={0} speed={-0.2} onClick={() => this.scroll(1)}>
            <div className="background"
              style={{
                backgroundImage: 'url(http://oe2c4fczn.bkt.clouddn.com/unsplash-rawpixel-com-569620.jpg)',
              }} />
          </Parallax.Layer>

          <Parallax.Layer className="text header font-hei" offset={0} speed={0.2}>
            <span style={{ color: '#EEE8E0' }}>秘密花园</span>
          </Parallax.Layer>

          <Parallax.Layer className="text desc font-hei" offset={0} speed={0.4}>
            <span style={{ color: '#211715' }}>
              <p>我虽懒是懒一点</p>
              <p>但绝对不是随便</p>
            </span>
          </Parallax.Layer>

          <Parallax.Layer className="arrow" offset={0} speed={0.5}>
            <div></div>
          </Parallax.Layer>
        </React.Fragment>

        <React.Fragment>
          <Parallax.Layer offset={1} speed={-0.2} onClick={() => this.scroll(0)}>
            <div className="background"
              style={{
                backgroundImage: 'url(http://oe2c4fczn.bkt.clouddn.com/unsplash-debby-hudson-543573.jpg)',
              }} />
          </Parallax.Layer>
          <Parallax.Layer className="text header font-hei" offset={1} speed={0.3}>
            <span style={{ color: '#B9BDC5' }}>简单爱</span>
          </Parallax.Layer>
          <Parallax.Layer className="text desc font-hei" offset={1} speed={0.4}>
            <span style={{ color: '#AE895E' }}>
              <p>我想就这样</p>
              <p>牵着你的手不放开</p>
            </span>
          </Parallax.Layer>
        </React.Fragment>
      </Parallax >
    );
  }
}

export default HomeParallax;
