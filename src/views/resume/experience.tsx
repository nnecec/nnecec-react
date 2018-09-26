import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';

import { ExperienceItemStyled } from './styles/experienceStyled'
import { SectionStyled, SectionTitleStyled } from './styles/resumeStyled'

interface BasicProps {
  height: number
}

export default class Basic extends React.Component<BasicProps, {}> {
  render() {
    const { height } = this.props

    return (
      <SectionStyled>
        <div className="container">
          <SectionTitleStyled>
            <FormattedMessage
              tagName="span"
              id="resume.work"
            />
          </SectionTitleStyled>
          <ExperienceItemStyled>
            <h2>馬良行</h2>
            <FormattedMessage
              tagName="span"
              id="resume.work.malianghang"
            />

          </ExperienceItemStyled>

          <ExperienceItemStyled>
            <h2>点我达</h2>
            <FormattedMessage
              tagName="span"
              id="resume.work.dianwoda"
            />
          </ExperienceItemStyled>

          <Link to="/case">
            <FormattedMessage
              tagName="span"
              id="home.me.projects"
            />
          </Link>
        </div>
      </SectionStyled>
    )
  }
}
