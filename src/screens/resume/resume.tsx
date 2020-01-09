import React from 'react'
import { useStore } from 'store'
import { ContainerStyled } from 'styles/common'

import { Fade } from 'components'

import Basic from './basic'
import Experience from './experience'
import Skill from './skill'

export default function Resume (): React.ReactElement {
  const store = useStore()
  return (
    <div className="resume">
      <ContainerStyled>
        <Basic height={store.common.viewHeight} />
        <Skill />
      </ContainerStyled>
    </div>
  )
}
