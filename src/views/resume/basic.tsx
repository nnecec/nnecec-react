import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { SectionStyled, SectionTitleStyled } from './styles/resumeStyled'

interface BasicProps {
  height: number
}

export default class Basic extends React.Component<BasicProps, {}> {
  render() {
    const { height } = this.props

    return (
      <SectionStyled style={{ height }}>
        <div className="container">
          <div className="avatar"></div>

          <SectionTitleStyled>
            <FormattedMessage
              tagName="span"
              id="resume.name"
            />
          </SectionTitleStyled>

          <div className="contact">
            <div className="item">
              <FormattedMessage
                tagName="span"
                id="resume.email"
              />
              <span>: nnecec@outlook.com</span>
            </div>

            <div className="item">
              <span>Github: </span>
              <a href="//github.com/nnecec" target="_blank">github.com/nnecec</a>
            </div>
          </div>
        </div>
      </SectionStyled>
    )
  }
}
