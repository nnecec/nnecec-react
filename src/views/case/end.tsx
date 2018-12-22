import * as React from 'react'

import { EndStyled } from './styles/caseStyled'
const endJPG = require('../../assets/fuse-brussels-white.jpg')

export default class End extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<EndStyled>
      <img src={endJPG} alt="" width="60%" />
    </EndStyled >)
  }
}