import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import { ExperienceItemStyled } from './styles/experienceStyled'

interface BasicProps {
  height: number
}

export default class Basic extends React.Component<BasicProps, {}> {
  render() {
    const { height } = this.props

    return (
      <section className="work center" style={{ height: `${height}px` }}>
        <div className="container">
          <div className="title">
            <FormattedMessage
              tagName="span"
              id="resume.work"
            />
          </div>
          <ExperienceItemStyled>
            <p>馬良行 <a href="">www.malianghang.com</a></p>
            <FormattedMessage
              tagName="span"
              id="resume.work.malianghang"
            />
          </ExperienceItemStyled>

          <ExperienceItemStyled>
            <p>点我达</p>
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
      </section>
    )
  }
}
