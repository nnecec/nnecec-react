import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from 'react-spring'

const Fade: React.Fc = (props) => {
  const [opacity, setOpacity] = useState(0)
  const [y, setY] = useState(40)

  return (
    <animated.div
      style={useSpring({
        opacity,
        transform: `translate(0px, ${y}px)`,
        from: { opacity: 0, transform: 'translate(0px, 40px)' }
      })}
    >
      <Waypoint
        onEnter={() => {
          setOpacity(1)
          setY(0)
        }}
        bottomOffset={80}
      ></Waypoint>
      {props.children}
    </animated.div>
  )
}

export default Fade
