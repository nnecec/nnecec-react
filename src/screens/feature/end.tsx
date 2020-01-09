import React from 'react'

import { EndStyled } from './styles/featureStyled'

const endJPG = require('../../assets/fuse-brussels-white.jpg')

const End: React.FC = () => {
  return (<EndStyled>
    <img src={endJPG} alt="" width="60%" />
  </EndStyled >)
}
export default End
