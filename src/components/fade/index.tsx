import * as React from 'react';
import styled from 'styled-components';
import * as propTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import { Spring, interpolate } from 'react-spring';

export default class Fade extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      y: 16,
    };
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
        from={{ opacity: 0, y: 16 }}
        to={{ opacity, y }}
        config={{ duration: 400 }}
      >
        {({ opacity, y }) =>
          <div style={{
            opacity,
            transform: `translate(0px, ${y}px)`,
          }}>
            <Waypoint onEnter={this.handleSpringEnter} bottomOffset={120}></Waypoint>
            {children}
          </div>
        }
      </Spring>
    );
  }
}
