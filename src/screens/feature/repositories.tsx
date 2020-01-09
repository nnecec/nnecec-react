import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

import { Tag, TagTitleEnum, Fade } from 'components'

import { RepositoryStyled, FeatureTitleStyled, FeatureRepoStyled } from './styles/featureStyled'

const dwdPNG = require('../../assets/dwd.png')
const mlabPNG = require('../../assets/mlab.png')

const Repositories: React.FC = () => {
  return (
    <RepositoryStyled>
      <div className="container work">

        <Fade>
          <FeatureTitleStyled>
            <FormattedMessage
              tagName="span"
              id="repository.work"
            />
          </FeatureTitleStyled>
        </Fade>

        <Fade>
          <FeatureRepoStyled>
            <img src={dwdPNG} alt="" width="100%" />

            <h2>CRM</h2>
            <FormattedHTMLMessage
              tagName="p"
              id="repository.dianwoda.desc"
            />
            <div className="tag">
              <Tag title={TagTitleEnum.JavaScript} />
              <Tag title={TagTitleEnum.React} />
              <Tag title={TagTitleEnum.Redux} />
              <Tag title={TagTitleEnum.Webpack} />
              <Tag title={TagTitleEnum.SCSS} />
            </div>
          </FeatureRepoStyled>
        </Fade>
        <Fade>
          <FeatureRepoStyled>
            <img src={mlabPNG} alt="" width="100%" />
            <h2>malianghang official site</h2>
            <FormattedHTMLMessage
              tagName="p"
              id="repository.malianghang.desc"
            />
            <div className="tag">
              <Tag title={TagTitleEnum.JavaScript} />
              <Tag title={TagTitleEnum.Angular} />
              <Tag title={TagTitleEnum.Grunt} />
              <Tag title={TagTitleEnum.RequireJS} />
              <Tag title={TagTitleEnum.SCSS} />
            </div>
          </FeatureRepoStyled>
        </Fade>

      </div>

      <div className="container">

        <Fade>
          <FeatureTitleStyled>
            <FormattedMessage
              tagName="span"
              id="repository.personal"
            />
          </FeatureTitleStyled>
        </Fade>

        <Fade>
          <FeatureRepoStyled>
            <a href="https://github.com/nnecec/nnecec-react" target="_blank" rel="noopener noreferrer">
              <h2>nnecec-react</h2>
              <FormattedHTMLMessage
                tagName="p"
                id="repository.nnecec-react.desc"
              />
              <div className="tag">
                <Tag title={TagTitleEnum.TypeScript} />
                <Tag title={TagTitleEnum.React} />
                <Tag title={TagTitleEnum.MobX} />
                <Tag title={TagTitleEnum.Parcel} />
                <Tag title={TagTitleEnum.PostCSS} />
              </div>
            </a>
          </FeatureRepoStyled>
        </Fade>
        <Fade>
          <FeatureRepoStyled>
            <a href="https://github.com/nnecec/ecblog-server" target="_blank" rel="noopener noreferrer">
              <h2>blog</h2>
              <h3>blog-server</h3>
              <FormattedHTMLMessage
                tagName="p"
                id="repository.ecblog-server.desc"
              />
              <div className="tag">
                <Tag title={TagTitleEnum.Nodejs} />
                <Tag title={TagTitleEnum.TypeScript} />
                <Tag title={TagTitleEnum.GraphQL} />
                <Tag title={TagTitleEnum.Koa} />
                <Tag title={TagTitleEnum.mongoose} />
                <Tag title={TagTitleEnum.Passport} />
              </div>
            </a>
          </FeatureRepoStyled>
        </Fade>
        <Fade>
          <FeatureRepoStyled>
            <a href="https://github.com/nnecec/nnecec-blog-admin" target="_blank" rel="noopener noreferrer">
              <h3>blog-admin</h3>
              <FormattedHTMLMessage
                tagName="p"
                id="repository.ecblog-admin.desc"
              />
              <div className="tag">
                <Tag title={TagTitleEnum.TypeScript} />
                <Tag title={TagTitleEnum.Angular} />
                <Tag title={TagTitleEnum.Apollo} />
                <Tag title={TagTitleEnum.RxJS} />
                <Tag title={TagTitleEnum.SCSS} />
              </div>
            </a>
          </FeatureRepoStyled>
        </Fade>
        <Fade>
          <FeatureRepoStyled>
            <a href="https://github.com/nnecec/arrow" target="_blank" rel="noopener noreferrer">
              <h2>Arrow</h2>
              <FormattedHTMLMessage
                tagName="p"
                id="repository.arrow.desc"
              />
              <div className="tag">
                <Tag title={TagTitleEnum.React} />
                <Tag title={TagTitleEnum.TypeScript} />
                <Tag title={TagTitleEnum.Less} />
                <Tag title={TagTitleEnum.Jest} />
                <Tag title={TagTitleEnum.Rollup} />
              </div>
            </a>
          </FeatureRepoStyled>
        </Fade>
        <Fade>
          <FeatureRepoStyled>
            <a href="https://github.com/nnecec/nnecec-luoo" target="_blank" rel="noopener noreferrer">
              <h2>nnecec-luoo</h2>
              <FormattedHTMLMessage
                tagName="p"
                id="repository.nnecec-luoo.desc"
              />
              <div className="tag">
                <Tag title={TagTitleEnum.Electron} />
                <Tag title={TagTitleEnum.JavaScript} />
                <Tag title={TagTitleEnum.React} />
                <Tag title={TagTitleEnum.MobX} />
                <Tag title={TagTitleEnum.SCSS} />
                <Tag title={TagTitleEnum.Webpack} />
              </div>
            </a>
          </FeatureRepoStyled>
        </Fade>
        <Fade>
          <FeatureRepoStyled>
            <a href="https://github.com/nnecec/necook" target="_blank" rel="noopener noreferrer">
              <h2>necook</h2>
              <FormattedHTMLMessage
                tagName="p"
                id="repository.necook.desc"
              />
              <div className="tag">
                <Tag title={TagTitleEnum.markdown} />
                <Tag title={TagTitleEnum.JavaScript} />
              </div>
            </a>
          </FeatureRepoStyled>
        </Fade>
        <Fade>
          <FeatureRepoStyled>
            <a href="https://github.com/nnecec/leetec" target="_blank" rel="noopener noreferrer">
              <h2>leetec</h2>
              <FormattedHTMLMessage
                tagName="p"
                id="repository.leetec.desc"
              />
              <div className="tag">
                <Tag title={TagTitleEnum.JavaScript} />
                <Tag title={TagTitleEnum.AVA} />
              </div>
            </a>
          </FeatureRepoStyled>
        </Fade>

      </div>
    </RepositoryStyled>
  )
}
export default Repositories
