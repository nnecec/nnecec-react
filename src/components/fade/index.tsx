import * as React from 'react';
import Waypoint from 'react-waypoint';
import { Spring } from 'react-spring';

export default class Fade extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      y: 40,
    };
  }

  componentDidMount() {
    
  }

  handleSpringEnter = () => {
    this.setState({
      opacity: 1,
      y: 0,
    });
  }

  render() {
    const { children } = this.props;
    const { opacity, y } = this.state;

    return (
      <Spring
        from={{ opacity: 0, y: 40 }}
        to={{ opacity, y }}
      >
        {({ opacity, y }) =>
          <div style={{
            opacity,
            transform: `translate(0px, ${y}px)`,
          }}>
            <Waypoint onEnter={this.handleSpringEnter} bottomOffset={80}></Waypoint>
            {children}
          </div>
        }
      </Spring>
    );
  }
}
