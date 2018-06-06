import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {
  FormattedMessage,
} from 'react-intl';

@inject('commonStore')
@observer
class About extends React.Component {
  render() {
    return (
      <div className="about">

        <section className="basic-info">
          <div className="container">
            <div className="avatar"></div>

            <div className="name">
              <FormattedMessage
                tagName="span"
                id="about.name"
              />
            </div>

            <div className="contact">
              <FormattedMessage
                tagName="span"
                id="about.email"
              />
              <span>nnecec@outlook.com</span>
              ·
              <FormattedMessage
                tagName="span"
                id="about.phone"
              />
              <span>17557284628</span>
              ·              
              <span>Github</span>
              <a href="https://github.com/nnecec" target="_blank">github.com/nnecec</a>
            </div>
          </div>
        </section>

        <section className="work"></section>

      </div>
    );
  }
}

export default About;
