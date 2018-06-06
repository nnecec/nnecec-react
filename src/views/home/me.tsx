import * as React from 'react';
import Waypoint from 'react-waypoint';
import * as anime from 'animejs';

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.img = React.createRef();
    this.desc = React.createRef();
    this.state = {
      isTransition: false,
    };
  }

  handleEnter = () => {
    const { isTransition } = this.state;

    if (!isTransition) {
      const img = anime({
        targets: this.img.current,
        translateY: '-200px',
        delay: 500,
        easing: 'easeInOutExpo',
      });

      this.setState((prevState, props) => {
        return {
          isTransition: true,
        };
      });

    }

  }

  render() {
    return (
      <div className="me-wrapper">
        <figure className="img" ref={this.img}></figure>
        {/* <Waypoint onEnter={this.handleEnter} ref={this.desc}>
          <div className="description">
            <p>我虽懒是懒一点</p>
            <p>但绝对不是随便</p>
          </div>
        </Waypoint> */}

      </div>
    );
  }
}

export default Me;
