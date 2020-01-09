import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Fade } from 'components'

import { SkillStyled } from './styles/skillStyled'
import { SectionStyled, SectionTitleStyled } from './styles/resumeStyled'

export default function Skill (): React.ReactElement {
  return (
    <SectionStyled>
      <div className="container">
        <SectionTitleStyled>
          <FormattedMessage
            id="resume.skill"
          />
        </SectionTitleStyled>
        <SkillStyled>
          <Fade>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML/Jade</li>
            <li>CSS/Sass</li>
          </Fade>
        </SkillStyled>
        <SkillStyled>
          <Fade>
            <li>React/Redux/MobX</li>
            <li>Angular/RxJs</li>
            <li>Vue/VueX</li>
            <li>Node</li>
            <li>Koa/Express</li>
            <li>GraphQL</li>
          </Fade>
        </SkillStyled>
        <SkillStyled>
          <Fade>
            <li>Git</li>
            <li>Webpack/Parcel/Gulp/Grunt/rollup</li>
            <li>Electron</li>
            <li>MongoDB</li>
          </Fade>
        </SkillStyled>
      </div>
    </SectionStyled>
  )
}
