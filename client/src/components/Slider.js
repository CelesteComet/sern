import React, { Component } from 'react';
import Card from './Card';

const sliderStyles = {
  'width': '100vw',
  'overflow': 'scroll'
}

const sliderFigureStyles = {
  'width': '200vw',
  'margin': '0',
  'padding': '0'
}

class Slider extends Component {
  render() {
    return (
      <div className='.slider' style={ sliderStyles }>
        <figure style={ sliderFigureStyles }>
          { this.props.items.map((item, index) => {
              return (
                <div key={ index }>
                  <Card data={ item } />
                </div>
              );
            })
          }
        </figure>
      </div>
    );
  }
}

export default Slider;