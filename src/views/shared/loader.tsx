import * as React from 'react'
import { inject } from 'mobx-react'
import { Keyframes } from 'react-spring/renderprops'
import delay from 'delay'

import { LoaderStyled, ItemWrapStyled, ItemStyled, BackgroundWrapStyled, BackgroundStyled } from './styles/LoaderStyled'

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


    const Background = Keyframes.Trail({
      peek: [{ y: 0 }],
      show: [{ y: 0 }],
      hide: async (next: Function) => {
        await next({ y: 100, from: { y: 0 } })
        this.props.commonStore.setLoader()
      },
    })

    const Word = Keyframes.Trail({
      peek: [{ y: 80 }],
      show: async (next: Function) => {
        await next({ y: 0, from: { y: 80 } })
        await delay(2000)
        this.setState({ state: 'hide' })
      },
      hide: async (next: Function) => {
        await next({ y: 80, from: { y: 0 } })
      }
    })

    const items = ['s', 'h', 'i', ' ', 'c', 'h', 'e', 'n', 'g']
    const bgs = [1, 2, 3, 4, 5]
    return (
      <LoaderStyled>
        <BackgroundWrapStyled>
          <Background state={state} keys={bgs} items={bgs}>
            {
              (_) => (styles) => (
                <BackgroundStyled style={{
                  transform: `translate(0, ${styles.y}%)`,
                }} />
              )
            }
          </Background>
        </BackgroundWrapStyled>


        <ItemWrapStyled>
          <Word state={state} keys={items.map((_, i) => i)} items={items}>
            {(item) => styles => (
              <ItemStyled style={{
                transform: `translateY(${styles.y}px)`
              }}>{item}</ItemStyled>
            )}
          </Word>
        </ItemWrapStyled>
      </LoaderStyled>
    )
  }
}
