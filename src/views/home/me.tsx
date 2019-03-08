import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { Fade } from 'components'


export default function Me() {
  return (
    <div className="container">
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
          <FormattedHTMLMessage
            tagName="p"
            id="home.me.description"
          />
        </Fade>
        <Fade>
          <Link to="/case">
            <FormattedMessage
              tagName="span"
              id="home.me.projects"
            />
          </Link>
        </Fade>
      </div>
    </div>
  )
}
