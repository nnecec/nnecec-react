import * as React from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

const { useState } = React

export default function Fade(props: any) {
  const [opacity, setOpacity] = useState(0)
  const [y, setY] = useState(40)

  return (
    <animated.div style={useSpring({ opacity, transform: `translate(0px, ${y}px)`, from: { opacity: 0, transform: `translate(0px, 40px)` } })}>
      <Waypoint onEnter={() => {
        setOpacity(1)
        setY(0)
      }} bottomOffset={80}></Waypoint>
      {props.children}
    </animated.div>
  )
}
