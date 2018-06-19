import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Tag, Fade } from '../../components';

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
                  <FormattedMessage
                    tagName="p"
                    id="repository.work"
                  />
                </Col>

                <Col sm={12} md={8}>
                  <ul>
                    <li className="repository">
                      <h3>dianwoda admin system</h3>
                      <FormattedMessage
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
                      <FormattedMessage
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
                  <FormattedMessage
                    tagName="div"
                    id="repository.personal"
                  />
                </Col>

                <Col sm={12} md={8}>
                  <ul>
                    <li className="repository">
                      <h3>
                        <a href="https://github.com/nnecec/nnecec-react" target="_blank">nnecec-react</a>
                      </h3>
                      <FormattedMessage
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
                    </li>
                    <li className="repository">
                      <h3>ecblog-server</h3>
                      <FormattedMessage
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
                    </li>
                    <li className="repository">
                      <h3>ecblog-admin</h3>
                      <FormattedMessage
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
                    </li>
                  </ul>
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
