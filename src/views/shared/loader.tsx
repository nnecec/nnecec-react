import * as React from 'react'
import { Spring } from 'react-spring'

import theme from 'styles/theme'

interface LogoProps {
  width: number, // logo width
  height?: number
}

export default class Loader extends React.Component<LogoProps, any> {

  state = {
    hover: false
  }

  constructor(props: LogoProps) {
    super(props)
  }

  render() {
    const { width = 100, height = 100 } = this.props
    const { hover } = this.state

    return (
      <div>
        loader
      </div>
    )
  }
}
