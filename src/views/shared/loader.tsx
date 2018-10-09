import * as React from 'react'
import { Spring, Trail, Keyframes, animated } from 'react-spring'

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
    const bgs = [1, 2, 3, 4]
    return (
      <LoaderStyled>
        <BackgroundWrapStyled>
          <Trail
            from={{ y: 0 }}
            to={{ y: 100 }}
            keys={bgs}
            delay={2400}
          >
            {
              bgs.map(bg => styles =>
                <animated.div style={{
                  transform: `translate(0, ${styles.y}%)`,
                  width: '25%',
                  height: '100%',
                  backgroundColor: '#000',
                  display: 'inline-block'

                }}>{bg}</animated.div>
              )
            }
          </Trail>
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
