import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Tag, Fade } from 'components';

import { RepositoryStyled, CaseTitleStyled, CaseRepoStyled } from './styles/caseStyled'

const dwdPNG = require('../../assets/dwd.png')
const mlabPNG = require('../../assets/mlab.png')

export default function Repositories() {

  return (
    <RepositoryStyled>
      <div className="container work">
        <Grid>
          <Row>
            <Col sm={12} md={3}>
              <Fade>
                <CaseTitleStyled>
                  <FormattedMessage
                    tagName="span"
                    id="repository.work"
                  />
                </CaseTitleStyled>
              </Fade>
            </Col>

            <Col sm={12} md={8}>
              <Fade>
                <CaseRepoStyled>
                  <img src={dwdPNG} alt="" width="100%" />

                  <h2>admin.dianwoda</h2>
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
                </CaseRepoStyled>
              </Fade>
              <Fade>
                <CaseRepoStyled>
                  <img src={mlabPNG} alt="" width="100%" />
                  <h2>malianghang.com</h2>
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
                </CaseRepoStyled>
              </Fade>
            </Col>
          </Row>
        </Grid>

      </div>

      <div className="container">
        <Grid>
          <Row>
            <Col sm={12} md={3}>
              <Fade>
                <CaseTitleStyled>
                  <FormattedMessage
                    tagName="span"
                    id="repository.personal"
                  />
                </CaseTitleStyled>
              </Fade>
            </Col>

            <Col sm={12} md={8}>
              <Fade>
                <CaseRepoStyled>
                  <a href="https://github.com/nnecec/nnecec-react" target="_blank">
                    <h2>nnecec-react</h2>
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
                </CaseRepoStyled>
              </Fade>
              <Fade>
                <CaseRepoStyled>
                  <a href="https://github.com/nnecec/ecblog-server" target="_blank">
                    <h2>ecblog</h2>
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
                </CaseRepoStyled>
              </Fade>
              <Fade>
                <CaseRepoStyled>
                  <a href="https://github.com/nnecec/nnecec-blog-admin" target="_blank">
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
                </CaseRepoStyled>
              </Fade>
              <Fade>
                <CaseRepoStyled>
                  <a href="https://github.com/nnecec/arrow" target="_blank">
                    <h2>Arrow</h2>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.arrow.desc"
                    />
                    <div className="tag">
                      <Tag title={'React'} />
                      <Tag title={'TypeScript'} />
                      <Tag title={'Less'} />
                      <Tag title={'Jest'} />
                      <Tag title={'Rollup'} />
                    </div>
                  </a>
                </CaseRepoStyled>
              </Fade>
              <Fade>
                <CaseRepoStyled>
                  <a href="https://github.com/nnecec/nnecec-luoo" target="_blank">
                    <h2>nnecec-luoo</h2>
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
                </CaseRepoStyled>
              </Fade>
              <Fade>
                <CaseRepoStyled>
                  <a href="https://github.com/nnecec/necook" target="_blank">
                    <h2>necook</h2>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.necook.desc"
                    />
                    <div className="tag">
                      <Tag title={'markdown'} />
                      <Tag title={'JavaScript'} />
                    </div>
                  </a>
                </CaseRepoStyled>
              </Fade>
              <Fade>
                <CaseRepoStyled>
                  <a href="https://github.com/nnecec/leetec" target="_blank">
                    <h2>leetec</h2>
                    <FormattedHTMLMessage
                      tagName="p"
                      id="repository.leetec.desc"
                    />
                    <div className="tag">
                      <Tag title={'JavaScript'} />
                      <Tag title={'AVA'} />
                    </div>
                  </a>
                </CaseRepoStyled>
              </Fade>
            </Col>
          </Row>
        </Grid>
      </div>
    </RepositoryStyled>
  )
}

