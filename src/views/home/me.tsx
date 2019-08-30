import * as React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { ContainerStyled } from 'styles/common'
import { Fade } from 'components'

export default function Me (): React.ReactElement {
  return (
    <ContainerStyled>
      <div className="intro">
        <Fade>
          <FormattedHTMLMessage
            tagName="p"
            id="home.me.intro"
          />
        </Fade>
      </div>

      <div className="description">
        <Fade>
          <React.Fragment>
            <FormattedHTMLMessage
              tagName="p"
              id="home.me.description"
            />
            <Link to="/feature">
              <FormattedMessage
                tagName="span"
                id="home.me.projects"
              />
            </Link>
          </React.Fragment>
        </Fade>
      </div>
    </ContainerStyled>
  )
}
