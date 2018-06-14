import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';
import { Parallax, ParallaxLayer, Trail, config } from 'react-spring';
import Waypoint from 'react-waypoint';

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
    const { projects, opacity, translate } = this.state;
    console.log(projects);

    return (
      <div className="resume" style={{ height: `${this.viewHeight}px` }}>

        <Parallax pages={3}>
          <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#fefefe' }}></ParallaxLayer >
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#f0f0f0' }}></ParallaxLayer >
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#f3f3f3' }}></ParallaxLayer >

          <ParallaxLayer offset={0} speed={0}>
            <section
              className="basic-info center"
              style={{ height: `${this.viewHeight}px` }}
            >
              <div>
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
              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0}>
            <section className="work center" style={{ height: `${this.viewHeight}px` }}>
              <div>
                <div className="title">
                  <FormattedMessage
                    tagName="span"
                    id="resume.work"
                  />
                </div>
                <div className="item">
                  <p>馬良行</p>
                  <FormattedMessage
                    tagName="span"
                    id="resume.work.malianghang"
                  />
                </div>
                <div className="item">
                  <p>点我达</p>

                  <FormattedMessage
                    tagName="span"
                    id="resume.work.dianwoda"
                  />
                </div>
              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={-0}>
            <section className="project center" style={{ height: `${this.viewHeight}px` }}>
              <div>
                <div className="title">
                  <FormattedMessage
                    tagName="span"
                    id="resume.project"
                  />
                </div>
                <div className="item">
                  <Trail
                    from={{ opacity: 0, transform: 'translate(0,30px)' }}
                    to={{ opacity, transform: `translate(0,${translate}px)` }}
                    keys={projects.map(item => item.key)}
                    delay={500}
                  >
                    {
                      projects.map(p => styles =>
                        <div style={styles}>
                          <FormattedMessage
                            tagName="span"
                            id={p.id}
                          />
                        </div>
                      }
                  </Trail>
                  <Waypoint onEnter={this.handleProjectsIn} />

                  <div>
                    malianghang official website
                    一个珠宝首饰定制的电商网站。我参与了它从无到有的开发过程，这是我的第一份工作，也是第一个项目，它不完美，却有带给我许多不曾有过的经历。
                  </div>

                  <div>

                  </div>
                </div>

              </div>
            </section>

          </ParallaxLayer>
        </Parallax>;

      </div > ;
    )
  }
}

export default Resume;
