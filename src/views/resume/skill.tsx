import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { SkillStyled } from './styles/skillStyled'
import { SectionStyled, SectionTitleStyled } from './styles/resumeStyled'

interface BasicProps {
  height: number
}

export default class Basic extends React.Component<BasicProps, {}> {
  render() {
    return (
      <SectionStyled>
        <div className="container">
          <SectionTitleStyled>
            <FormattedMessage
              tagName="span"
              id="resume.skill"
            />
          </SectionTitleStyled>
          <SkillStyled>
            <li>JavaScript (ES6)</li>
            <li>TypeScript</li>
            <li>HTML/Jade</li>
            <li>CSS/Sass</li>
          </SkillStyled>
          <SkillStyled>
            <li>React/Redux/MobX</li>
            <li>Angular/RxJs</li>
            <li>Vue/VueX</li>
            <li>Node</li>
            <li>Koa/Express</li>
            <li>Graphql</li>
          </SkillStyled>
          <SkillStyled>
            <li>Git</li>
            <li>Webpack/Parcel/Gulp/Grunt/rollup</li>
            <li>Electron</li>
            <li>MongoDB</li>
          </SkillStyled>
        </div>
      </SectionStyled>
    )
  }
}
