import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

class ImageCarousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      translate: 0,
      left: '0',
      right: '0' 
    }
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleRightClick() {
    const { index } = this.state; 
    const { images } = this.props;
    if (index < images.length - 1) {
      this.setState({
        index: this.state.index + 1,
        translate: this.state.translate - (100/images.length)
      })
    }
  }

  handleLeftClick() {
    const { index } = this.state;
    const { images } = this.props;
    if (index > 0) {
      this.setState({
        index: this.state.index - 1,
        translate: this.state.translate + (100/images.length)          
      })
    }
  }

  handleHover(direction) {
    if (direction == 'left') { this.setState({left: '1'})}
    if (direction == 'right') { this.setState({right: '1'})}
  }

  render() {
    const { images } = this.props;

    const containerStyles = {
      width: '100%',
      height: 'auto',
      overflow: 'hidden',
      position: 'relative',
      background: 'black'
    }

    const carouselScrollStyles = {
      width: 100 * images.length + '%',
      transform: 'translateX(' + this.state.translate + '%)',
      transition: 'all 0.5s'
    }

    const buttonStyles = {
      position: 'absolute',
      height: '100%',
      width: '20%',
      zIndex: '1'
    }

    const gradientToRight = {
      background: 'linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0))',
      opacity: this.state.right
    }

    const gradientToLeft = {
      background: 'linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0))',
      opacity: this.state.left
    }

    return (
      <div style={ containerStyles }>
        <div>
          <div 
            className='carousel-mover' 
            onClick={this.handleRightClick} 
            onMouseOver={this.handleHover.bind(null, 'left')} 
            onMouseLeave={() => {this.setState({left: '0'})}}
            value='next' 
            style={ {...buttonStyles, ...gradientToLeft, 'right': '0px'} }>
          </div>
          <div 
            className='carousel-mover' 
            onClick={this.handleLeftClick} 
            onMouseOver={this.handleHover.bind(null, 'right')} 
            onMouseLeave={() => {this.setState({right: '0'})}}
            value='back' style={ {...buttonStyles, ...gradientToRight} }>
          </div>   
          <div className='carousel-scroll' onClick={this.handleTransition} style={ carouselScrollStyles } >
            { images.map((image_url, index) => {
              return (
                <img key={ index } src={ image_url } style={ {'height':'100%', 'width': (100/images.length + '%'), 'objectFit': 'contain'} } />
              );
            })}
          </div>
        </div>
 
      </div>
    );
  }
}

export default ImageCarousel;
