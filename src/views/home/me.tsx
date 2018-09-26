import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTransition: false,
    };
  }

  handleEnter = () => {

  }

  render() {
    return (
      <div className="me read">
        <div className="intro">
          <FormattedHTMLMessage
            tagName="p"
            id="home.me.intro"
          />
        </div>

        <div className="description">
          <FormattedHTMLMessage
            tagName="p"
            id="home.me.description"
          />
          <Link to="/case">
            <FormattedMessage
              tagName="span"
              id="home.me.projects"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Me;
