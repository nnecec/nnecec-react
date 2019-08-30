import * as React from 'react'
import { useStore } from 'store'

import Intro from './intro'
import Repositories from './repositories'
import End from './end'

export default function Feature (): React.ReactElement {
  const store = useStore()

  return (
    <div className="feature">
      <Intro height={store.common.viewHeight} />
      <Repositories />
    </div>
  )
}
