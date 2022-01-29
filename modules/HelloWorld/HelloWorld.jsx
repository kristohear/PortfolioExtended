// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class HelloWorld extends Component {

  static slug = 'et_pb_portfolio_extended';

  render() {
    const Content = this.props.__posts;
    return (
        <div id="test" dangerouslySetInnerHTML={{ __html: Content }} />
    );
  }
}

export default HelloWorld;
