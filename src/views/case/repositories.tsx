import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Tag, Fade } from 'components';

class Repositories extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="repositories">
        <Fade>
          <div className="container work">
            <Grid>
              <Row>
                <Col sm={12} md={4} className="title">
                  <FormattedHTMLMessage
                    tagName="p"
                    id="repository.work"
                  />
                </Col>

                <Col sm={12} md={8}>
                  <ul className="read">
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
                  </ul>
                </Col>
              </Row>
            </Grid>

          </div>
        </Fade>

        <div className="container">
          <Fade>
            <Grid>
              <Row>
                <Col sm={12} md={4} className="title">
                  <FormattedHTMLMessage
                    tagName="div"
                    id="repository.personal"
                  />
                </Col>

                <Col sm={12} md={8}>
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
                </Col>
              </Row>
            </Grid>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Repositories;
