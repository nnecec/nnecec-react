import React from 'react'
import { useStore } from 'store'

import { IntroStyled, MeStyled } from './styles/homeStyled'
import Me from './me'

const Home: React.FC = () => {
  const store = useStore()

  return (
    <div className="home">
      <IntroStyled style={{ height: store.common.viewHeight }} />
      <MeStyled>
        <Me></Me>
      </MeStyled>
    </div >
  )
}
export default Home
