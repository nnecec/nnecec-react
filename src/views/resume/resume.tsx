import * as React from 'react';
import { inject, observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

import { Fade } from 'components'

import Basic from './basic'
import Experience from './experience'
import Skill from './skill'

@inject('commonStore')
@observer
class Resume extends React.Component {
  viewHeight: number;

  constructor(props) {
    super(props);
    this.viewHeight = this.props.commonStore.viewHeight;
    this.state = {
      projects: [{
        id: 'resume.project.malianghang', key: 'mlh',
      }, {
        id: 'resume.project.dianwoda', key: 'dwd',
      }],
      opacity: 0,
      translate: 30,
    };
  }

  handleProjectsIn = () => {
    this.setState({
      opacity: 1,
      translate: 0,
    });
  }

  render() {
    const { projects } = this.state

    return (
      <div className="resume">
        <Basic height={this.viewHeight} />
        <Experience />
        <Fade>
          <Skill />
        </Fade>
      </div>
    )
  }
}

export default Resume;
