import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {
  FormattedMessage,
} from 'react-intl';

@inject('commonStore')
@observer
class Resume extends React.Component {
  render() {
    return (
      <div className="resume">

        <section className="basic-info container">
          <div className="avatar"></div>

          <div className="name">
            <FormattedMessage
              tagName="span"
              id="resume.name"
            />
          </div>

          <div className="contact">
            <FormattedMessage
              tagName="span"
              id="resume.email"
            />
            <span>nnecec@outlook.com</span>
            ·
              <FormattedMessage
              tagName="span"
              id="resume.phone"
            />
            <span>17557284628</span>
            ·
              <span>Github</span>
            <a href="https://github.com/nnecec" target="_blank">github.com/nnecec</a>
          </div>
        </section>

        <section className="work container">
          <div className="title">
            <FormattedMessage
              tagName="span"
              id="resume.work"
            />
          </div>
          <div className="item">
            馬良行

            <FormattedMessage
              tagName="span"
              id="resume.work.malianghang"
            />
          </div>
          <div className="item">
            点我达

            <FormattedMessage
              tagName="span"
              id="resume.work.dianwoda"
            />
          </div>
        </section>

        <section className="project container">
          <div className="title">
            <FormattedMessage
              tagName="span"
              id="resume.project"
            />
          </div>
          <div className="item">

            <FormattedMessage
              tagName="span"
              id="resume.project.malianghang"
            />
          </div>
        </section>

      </div>
    );
  }
}

export default Resume;
