import * as React from 'react'
import { Spring } from 'react-spring'

import theme from 'styles/theme'

interface LogoProps {
  width: number, // logo width
  height?: number
}

export default class Logo extends React.Component<LogoProps, any> {

  state = {
    hover: false
  }

  constructor(props: LogoProps) {
    super(props)
  }

  handlePointerEnter = (bool) => {
    const { dontHover } = this.props
    if (dontHover) return

    this.setState({ hover: bool })
  }


  render() {
    const { width = 100, height = 100 } = this.props
    const { hover } = this.state

    return (
      <div
        onPointerEnter={() => this.handlePointerEnter(true)}
        onPointerLeave={() => this.handlePointerEnter(false)}
      >
        <Spring from={{ fill: theme.colors.silver }} to={{ fill: hover ? theme.colors.primary : theme.colors.silver }}>
          {({ fill }) => <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 600 600" width={width} height={height || width} fill={fill}>
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
          </svg>}
        </Spring>
      </div>


    )
  }
}
