import React from 'react'
import { FormattedMessage } from 'react-intl'
import { SectionStyled, SectionTitleStyled } from './styles/resumeStyled'

type BasicProps = {
  height: number;
};

const Basic: React.FC<BasicProps> = (props: BasicProps) => {
  const { height } = props

  return (
    <SectionStyled style={{ height }}>
      <div className="container">
        <div className="avatar"></div>

        <SectionTitleStyled>
          <FormattedMessage tagName="span" id="resume.name" />
        </SectionTitleStyled>

        <div className="contact">
          <div className="item">
            <FormattedMessage tagName="span" id="resume.email" />
            <span>: nnecec@outlook.com</span>
          </div>

          <div className="item">
            <span>Github: </span>
            <a
              href="//github.com/nnecec"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/nnecec
            </a>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}
export default Basic
