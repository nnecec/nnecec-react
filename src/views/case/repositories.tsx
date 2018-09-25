import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Tag, Fade } from 'components';

export default class Repositories extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="repositories">
        <div className="container work">
          <Grid>
            <Row>
              <Col sm={12} md={3} className="title">
                <Fade>
                  <FormattedMessage
                    tagName="p"
                    id="repository.work"
                  />
                </Fade>
              </Col>

              <Col sm={12} md={8}>
                <ul className="read">
                  <Fade>
                    <li className="repository ">
                      <h3>admin.dianwoda</h3>
                      <FormattedHTMLMessage
                        tagName="p"
                        id="repository.dianwoda.desc"
                      />
                      <div className="tag">
                        <Tag title={'JavaScript'} />
                        <Tag title={'React'} />
                        <Tag title={'Redux'} />
                        <Tag title={'Webpack'} />
                        <Tag title={'SCSS'} />
                      </div>
                    </li>
                  </Fade>
                  <Fade>
                    <li className="repository">
                      <h3>malianghang.com</h3>
                      <FormattedHTMLMessage
                        tagName="p"
                        id="repository.malianghang.desc"
                      />
                      <div className="tag">
                        <Tag title={'JavaScript'} />
                        <Tag title={'Angular'} />
                        <Tag title={'Grunt'} />
                        <Tag title={'RequireJS'} />
                        <Tag title={'SCSS'} />
                      </div>
                    </li>
                  </Fade>
                </ul>
              </Col>
            </Row>
          </Grid>

        </div>

        <div className="container">
          <Grid>
            <Row>
              <Col sm={12} md={3} className="title">
                <Fade>
                  <FormattedMessage
                    tagName="p"
                    id="repository.personal"
                  />
                </Fade>
              </Col>

              <Col sm={12} md={8}>
                <Fade>
                  <a className="repository no read" href="https://github.com/nnecec/nnecec-react" target="_blank">
                    <h3>nnecec-react</h3>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.nnecec-react.desc"
                    />
                    <div className="tag">
                      <Tag title={'TypeScript'} />
                      <Tag title={'React'} />
                      <Tag title={'MobX'} />
                      <Tag title={'Parcel'} />
                      <Tag title={'PostCSS'} />
                    </div>
                  </a>
                </Fade>
                <Fade>
                  <a className="repository no read" href="https://github.com/nnecec/ecblog-server" target="_blank">
                    <h3>ecblog-server</h3>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.ecblog-server.desc"
                    />
                    <div className="tag">
                      <Tag title={'Node.js'} />
                      <Tag title={'TypeScript'} />
                      <Tag title={'GraphQL'} />
                      <Tag title={'Koa'} />
                      <Tag title={'mongoose'} />
                      <Tag title={'Passport'} />
                    </div>
                  </a>
                </Fade>
                <Fade>
                  <a className="repository no read" href="https://github.com/nnecec/nnecec-blog-admin" target="_blank">
                    <h3>ecblog-admin</h3>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.ecblog-admin.desc"
                    />
                    <div className="tag">
                      <Tag title={'TypeScript'} />
                      <Tag title={'Angular'} />
                      <Tag title={'Apollo'} />
                      <Tag title={'RxJS'} />
                      <Tag title={'SCSS'} />
                    </div>
                  </a>
                </Fade>
                <Fade>
                  <a className="repository no read" href="https://github.com/nnecec/nnecec-blog-admin" target="_blank">
                    <h3>ecblog-admin</h3>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.ecblog-admin.desc"
                    />
                    <div className="tag">
                      <Tag title={'TypeScript'} />
                      <Tag title={'Angular'} />
                      <Tag title={'Apollo'} />
                      <Tag title={'RxJS'} />
                      <Tag title={'SCSS'} />
                    </div>
                  </a>
                </Fade>
                <Fade>
                  <a className="repository no read" href="https://github.com/nnecec/nnecec-luoo" target="_blank">
                    <h3>nnecec-luoo</h3>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.nnecec-luoo.desc"
                    />
                    <div className="tag">
                      <Tag title={'Electron'} />
                      <Tag title={'JavaScript'} />
                      <Tag title={'React'} />
                      <Tag title={'MobX'} />
                      <Tag title={'SCSS'} />
                      <Tag title={'Webpack'} />
                    </div>
                  </a>
                </Fade>
                <Fade>
                  <a className="repository no read" href="https://github.com/nnecec/necook" target="_blank">
                    <h3>necook</h3>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.necook.desc"
                    />
                    <div className="tag">
                      <Tag title={'markdown'} />
                      <Tag title={'JavaScript'} />
                    </div>
                  </a>
                </Fade>
                <Fade>
                  <a className="repository no read" href="https://github.com/nnecec/leetec" target="_blank">
                    <h3>leetec</h3>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.leetec.desc"
                    />
                    <div className="tag">
                      <Tag title={'JavaScript'} />
                      <Tag title={'AVA'} />
                    </div>
                  </a>
                </Fade>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

