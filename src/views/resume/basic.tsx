import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface BasicProps {
  height: number
}

export default class Basic extends React.Component<BasicProps, {}> {
  render() {
    const { height } = this.props

    return (
      <section
        className="basic-info center"
        style={{ height: `${height}px` }}
      >
        <div className="container">
          <div className="avatar"></div>

          <div className="name">
            <FormattedMessage
              tagName="span"
              id="resume.name"
            />
          </div>

          <div className="contact">
            <div className="item">
              <FormattedMessage
                tagName="span"
                id="resume.email"
              />
              <span>: nnecec@outlook.com</span>
            </div>

            <div className="item">
              <FormattedMessage
                tagName="span"
                id="resume.phone"
              />
              <span>: 17557284628</span>
            </div>

            <div className="item">
              <span>Github: </span>
              <a href="//github.com/nnecec" target="_blank">github.com/nnecec</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
