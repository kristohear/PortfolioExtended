// External Dependencies
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

// Internal Dependencies
import './style.css';


class HelloWorld extends Component {

  static slug = 'et_pb_portfolio_extended';
  
  constructor(props) {
    super(props);
    this.boxRef = React.createRef();
  }
  
  componentDidMount() {
    this.runSalvattore();
  }

  componentDidUpdate() {
    this.runSalvattore();
  }

  runSalvattore() {
    var i = window.jQuery(this.boxRef.current).find(".et_pb_salvattore_content");
    if (i.length > 0) {
      if (i.find(">.column").length) {
        window.salvattore.recreateColumns(i[0])
      } else {
        window.salvattore.registerGrid(i[0])
      }
    } 
  }

  render() {
    const Content = this.props.__posts;
    const Fullscreen = this.props.fullwidth === 'on';
    if (Fullscreen) {
      return (
        <div class="et_pb_posts" dangerouslySetInnerHTML={{ __html: Content }} />
      );
    } else {
      return (
        <div class="et_pb_blog_grid_wrapper" ref={this.boxRef} >
          <div class="et_pb_blog_grid clearfix" dangerouslySetInnerHTML={{ __html: Content }} />
        </div>
      );
    }
  }
}

export default HelloWorld;
