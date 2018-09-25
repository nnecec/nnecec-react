import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface BasicProps {
  height: number
}

export default class Basic extends React.Component<BasicProps, {}> {
  render() {
    const { height } = this.props

    return (
      <section
        className="basic-info center"
        style={{ height: `${height}px` }}
      >
        <div className="container">
          LANGUAGES
  JavaScript (ES6)
  TypeScript
  HTML
  CSS/Sass
  Python
  SQL
  R
  FRAMEWORKS
  Ember & Glimmer
  React
  Jekyll
  Node
  D3
  Wordpress
  Timber
  TOOLS
  Bash
  Git & Github
  Gulp & Grunt
  Chrome DevTools
  Postman
  MongoDB
  DESIGN
  Sketch
  InDesign
  InVision
  Prototyping
  Wireframing
  User Testing
        </div>
      </section>
    )
  }
}
