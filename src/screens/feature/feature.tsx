import React from 'react'
import { useStore } from 'store'

import Intro from './intro'
import Repositories from './repositories'
// import End from './end'

const Feature: React.FC = () => {
  const store = useStore()

  return (
    <div className="feature">
      <Intro height={store.common.viewHeight} />
      <Repositories />
    </div>
  )
}
export default Feature
