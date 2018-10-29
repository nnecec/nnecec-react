import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Spring, Trail, Keyframes, animated } from 'react-spring'
import delay from 'delay'

import { LoaderStyled, ItemWrapStyled, ItemStyled, BackgroundWrapStyled } from './styles/LoaderStyled'

@inject('commonStore')
export default class Loader extends React.Component<any, any> {
  state = {
    state: 'peek'
  }
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.setState({ state: 'show' })
  }

  render() {
    const { width = 100, height = 100 } = this.props
    const { state } = this.state

    console.log(state)

    const Background = Keyframes.Trail({
      peek: [{ y: 0 }],
      show: [{ y: 0 }],
      hide: async (next: Function) => {
        await next({ y: 100, from: { y: 0 } })
        this.props.commonStore.setLoader();
      },
    })

    const Word = Keyframes.Trail({
      peek: [{ y: 80 }],
      show: async (next: Function) => {
        await next({ y: 0, from: { y: 80 } })
        await delay(1000)
        this.setState({ state: 'hide' })
      },
      hide: async (next: Function) => {
        await next({ y: 80 })
      }
    })

    const items = ['nnecec', 'Frontend', 'IG for Win!']
    const bgs = [1, 2, 3, 4]
    return (
      <LoaderStyled>
        <BackgroundWrapStyled>
          <Background state={state} keys={bgs} items={bgs}>
            {
              (bg, i) => (styles) => (
                <animated.div style={{
                  transform: `translate(0, ${styles.y}%)`,
                  width: '25%',
                  height: '100%',
                  backgroundColor: '#000',
                  display: 'inline-block'
                }}>{bg}</animated.div>
              )
            }
          </Background>
        </BackgroundWrapStyled>


        <ItemWrapStyled>
          <Word state={state} keys={items} items={items}>
            {(item, i) => styles => (
              <ItemStyled style={{
                transform: `translateY(${styles.y}px)`
              }}>{item} /</ItemStyled>
            )}
          </Word>
        </ItemWrapStyled>
      </LoaderStyled>
    )
  }
}
