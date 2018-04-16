import * as React from 'react';
import Waypoint from 'react-waypoint';

class Me extends React.Component {


  handleEnter = () => {
    console.log('me enter');
  }

  render() {
    return (
      <div className="me-wrapper">
        <figure className="img"></figure>
        <Waypoint onEnter={this.handleEnter}>
          <div className="description">
            <p>我虽懒是懒一点</p>
            <p>但绝对不是随便</p>
          </div>
        </Waypoint>

      </div>
    );
  }
}

export default Me;
