import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import { Fade } from 'components'

import { ExperienceItemStyled } from './styles/experienceStyled'
import { SectionStyled, SectionTitleStyled } from './styles/resumeStyled'

export default function Basic() {

  return (
    <SectionStyled>
      <div className="container">
        <Fade>
          <SectionTitleStyled>
            <FormattedMessage
              tagName="span"
              id="resume.work"
            />

          </SectionTitleStyled>
        </Fade>
        <Fade>
          <ExperienceItemStyled>
            <h2>馬良行</h2>
            <FormattedMessage
              tagName="span"
              id="resume.work.malianghang"
            />
          </ExperienceItemStyled>
        </Fade>
        <Fade>
          <ExperienceItemStyled>
            <h2>点我达</h2>
            <FormattedMessage
              tagName="span"
              id="resume.work.dianwoda"
            />
          </ExperienceItemStyled>
        </Fade>

        <Fade>
          <Link to="/case">
            <FormattedMessage
              tagName="span"
              id="home.me.projects"
            />
          </Link>
        </Fade>
      </div>
    </SectionStyled>
  )
}
