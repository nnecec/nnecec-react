import React, { useState, useEffect } from 'react'

import { Keyframes } from 'react-spring/renderprops'
import delay from 'delay'
import { useStore } from 'store'

import {
  LoaderStyled,
  ItemWrapStyled,
  ItemStyled,
  BackgroundWrapStyled,
  BackgroundStyled
} from './styles/LoaderStyled'

export default (): React.ReactElement => {
  const store = useStore()

  const [state, setState] = useState('peek')

  useEffect(() => {
    setState('show')
  }, [])

  const Background = Keyframes.Trail({
    peek: [{ y: 0 }],
    show: [{ y: 0 }],
    hide: async (next: Function) => {
      await next({ y: 100, from: { y: 0 } })
      store.common.setLoader()
    }
  })

  const Word = Keyframes.Trail({
    peek: [{ y: 80 }],
    show: async (next: Function) => {
      await next({ y: 0, from: { y: 80 } })
      await delay(2000)
      setState('hide')
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
          {() => styles => (
            <BackgroundStyled
              style={{
                transform: `translate(0, ${styles.y}%)`
              }}
            />
          )}
        </Background>
      </BackgroundWrapStyled>

      <ItemWrapStyled>
        <Word state={state} keys={items.map((_, i) => i)} items={items}>
          {item => styles => (
            <ItemStyled
              style={{
                transform: `translateY(${styles.y}px)`
              }}
            >
              {item}
            </ItemStyled>
          )}
        </Word>
      </ItemWrapStyled>
    </LoaderStyled>
  )
}
