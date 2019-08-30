import * as React from 'react'
import { useSpring, animated } from 'react-spring'

import { color } from 'styles/common'

interface LogoProps {
  width: number; // logo width
  height?: number;
  dontHover?: boolean; // disable hover
}

const { useState } = React

export default function Logo (props: LogoProps): React.ReactElement {
  const { width = 100, height = 100 } = props

  const [hover, setHover] = useState(false)

  function handlePointerMove (bool: boolean): void {
    const { dontHover } = props
    if (dontHover) return

    setHover(bool)
  }

  const svgProps = useSpring({ fill: hover ? color.primary : color.textColor, from: { fill: color.textColor } })

  return (
    <div
      onPointerEnter={(): void => handlePointerMove(true)}
      onPointerLeave={(): void => handlePointerMove(false)}
    >
      <animated.svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 600 600" width={width} height={width} fill={svgProps.fill}>
        <g>
          <rect x="75.5" y="49.5" width="199" height="499" />
          <path d="M274,50v498H76V50H274 M275,49H75v500h200V49L275,49z" />
        </g>
        <g>
          <rect x="325.5" y="49.5" width="199" height="274" />
          <path d="M524,50v273H326V50H524 M525,49H325v275h200V49L525,49z" />
        </g>
        <g>
          <rect x="325.5" y="374.5" width="199" height="174" />
          <path d="M524,375v173H326V375H524 M525,374H325v175h200V374L525,374z" />
        </g>
        <g>
          <rect x="75.5" y="49.5" width="449" height="174" />
          <path d="M524,50v173H76V50H524 M525,49H75v175h450V49L525,49z" />
        </g>
      </animated.svg>
    </div >
  )
}
