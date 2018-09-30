import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { IntroStyled } from './styles/introStyled'

export default class Intro extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { height } = this.props

    return (<IntroStyled style={{ height: `${height}px` }}>
      <Grid>
        <Row>
          <Col md={8}></Col>
          <Col md={4}>
          
          </Col>

        </Row>

      </Grid>

    </IntroStyled >)
  }
}