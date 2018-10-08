import * as React from 'react'
import { Spring, Trail } from 'react-spring'

import { LoaderStyled, BackgroundStyled, ItemWrapStyled, ItemStyled, BackgroundWrapStyled } from './styles/LoaderStyled'



interface LogoProps {
  width: number, // logo width
  height?: number
}

export default class Loader extends React.Component<LogoProps, any> {

  constructor(props: LogoProps) {
    super(props)
  }

  render() {
    const { width = 100, height = 100 } = this.props


    const items = ['A tiny', 'fucking', 'genius']
    return (
      <LoaderStyled>
        <BackgroundWrapStyled>
          <BackgroundStyled></BackgroundStyled>
          <BackgroundStyled></BackgroundStyled>
          <BackgroundStyled></BackgroundStyled>
          <BackgroundStyled></BackgroundStyled>
        </BackgroundWrapStyled>


        <ItemWrapStyled>
          <Trail
            from={{ y: 60 }}
            to={{ y: 0 }}
            keys={items}>
            {items.map(item => styles =>
              <ItemStyled style={{
                transform: `translateY(${styles.y}px)`
              }}>{item}</ItemStyled>
            )}
          </Trail>
        </ItemWrapStyled>
      </LoaderStyled>
    )
  }
}
