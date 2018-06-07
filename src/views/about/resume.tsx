import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {
  FormattedMessage,
} from 'react-intl';
import { Parallax, ParallaxLayer } from 'react-spring';

@inject('commonStore')
@observer
class Resume extends React.Component {
  viewHeight: number;

  constructor(props) {
    super(props);
    this.viewHeight = this.props.commonStore.viewHeight;
  }
  render() {
    return (
      <div className="resume" style={{ height: `${this.viewHeight}px` }}>

        <Parallax pages={3}>
          <ParallaxLayer offset={0} speed={1} style={{ backgroundImage: '#bbb' }}></ParallaxLayer >
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#ddd' }}></ParallaxLayer >
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#999' }}></ParallaxLayer >

          <ParallaxLayer offset={0}>
            <section className="basic-info container" style={{ height: `${this.viewHeight}px` }}>
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
                  <span> nnecec@outlook.com</span>
                </div>

                <div className="item">
                  <FormattedMessage
                    tagName="span"
                    id="resume.phone"
                  />
                  <span> 17557284628</span>
                </div>

                <div className="item">
                  <span>Github</span>
                  <a href="https://github.com/nnecec" target="_blank"> github.com/nnecec</a>
                </div>

              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer offset={1}>
            <section className="work container" style={{ height: `${this.viewHeight}px` }}>
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
          </ParallaxLayer>

          <ParallaxLayer offset={2} style={{ backgroundColor: '#999' }}>
            <section className="project container" style={{ height: `${this.viewHeight}px` }}>
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
          </ParallaxLayer>
        </Parallax>;

      </div >;
    )
  }
}

export default Resume;
