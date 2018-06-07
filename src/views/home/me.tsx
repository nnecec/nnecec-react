import * as React from 'react';
import Waypoint from 'react-waypoint';

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

  }

  render() {
    return (
      <div className="me-wrapper">
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
