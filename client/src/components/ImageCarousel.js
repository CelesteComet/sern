import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

// requires images prop
/*
class ImageCarousel extends Component {
  componentDidMount() {
    $('.carousel').carousel({
      fullWidth: true,
      indicators: true
    });
  }

  render() {
    const { images } = this.props;
    return (
      <div className='carousel carousel-slider'>
        { images.map((image_url, index) => {
            return (
              <a key={index} className='carousel-item' href='#one!'>
                <img src={ image_url } />
              </a>
            );
          }) 
        }
      </div>
    )
  }
}
*/

class ImageCarousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick() {
    this.setState({
      index: this.state.index - 1
    })
  }

  handleRightClick() {
    console.log("HANDLING RIGHT")
    this.setState({
      index: this.state.index + 1
    })
  }

  render() {

    const { images } = this.props;

    const containerStyles = {
      border: '1px solid black',
      width: '365px',
      height: '600px',
      overflow: 'hidden'
    }

    const carouselScrollStyles = {
      width: (365 * 3) + 'px'
    }

    const buttonStyles = {
      background: 'red',
      position: 'absolute'
    }

    return (
      <div style={ containerStyles }> 
        <Motion style={ {x: spring(365 * this.state.index)} }>
          { value =>  
            {
              return (
                <div>
                  <div className='carousel-scroll' onClick={this.handleTransition} style={ { ...carouselScrollStyles, WebkitTransform: `translate3d(${value.x}px, 0, 0)`,} } >
                    { images.map((image_url, index) => {
                      return (
                        <img key={ index } src={ image_url } style={ {'height':'100%', 'width':'33.33%', 'objectFit': 'cover'} } />
                      );
                    })}

                  </div>

                </div>
              )
            }

          }

        </Motion>
        <button onClick={this.handleRightClick} value='next' style={ buttonStyles }>Next</button>
        <button onClick={this.handleLeftClick} value='back' style={ {...buttonStyles, top: '30px'} }>Back</button>    
      </div>
    );
  }
}

export default ImageCarousel;
