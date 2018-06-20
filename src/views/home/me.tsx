import * as React from 'react';
import { Link } from 'react-router-dom';
import Waypoint from 'react-waypoint';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.img = React.createRef();
    this.desc = React.createRef();
    this.state = {
      isTransition: false,
    };
  }

  handleEnter = () => {
    const { isTransition } = this.state;

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
        </div>
      </div>
    );
  }
}

export default Me;
