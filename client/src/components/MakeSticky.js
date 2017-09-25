import React, { Component } from 'react';

class MakeSticky extends Component {

  constructor() {
    super();
    this.renderChildren = this.renderChildren.bind(this);
    this.state = {
      stick: false
    }
  }

  componentDidMount() {
    var self = this;
    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
      if (scroll_pos > 100) {
        console.log("STICK")
        self.setState({
          stick: true
        })
      } else {
        self.setState({
          stick: false
        })
      }
    }

    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });
  }

  renderChildren() {
    if (this.state.stick) {
      return React.cloneElement(this.props.children, {'style': {'position': 'fixed'} })
    }

    return React.cloneElement(this.props.children, {'style': {'position': 'relative'} }) 
  }

  render() {
    return (
      <div>
        { this.renderChildren() }
      </div>
    );   
  }
}

export default MakeSticky;