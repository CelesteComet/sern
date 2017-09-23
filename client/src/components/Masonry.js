import React, { Component } from 'react';

class Masonry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: props.images.map(({image_url, width, height}, idx) => {return {image_url, ratio: (width/height), styles: {'float': 'left'}, index: idx } })
    }

    this.currentImages = [];
    this.currentRow = 0;
    this.height = 0;
    this.containerWidth = window.innerWidth;

    this.resizeImages = this.resizeImages.bind(this);
    this.handleRow = this.handleRow.bind(this);
    this.setupRow = this.setupRow.bind(this);
    this.resizeRow = this.resizeRow.bind(this);
    this.resizeImgContainer = this.resizeImgContainer.bind(this);


  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeImages)
    this.resizeImages();
  }

  resizeImages() {
    var { images } = this.state;

    this.containerWidth = window.innerWidth;

    for (var i = 0; i < images.length; i++) {
      this.handleRow(images[i], i);
    }
  }

  handleRow(image, index) {
    this.currentImages.push(image);
    this.currentRow += image.ratio;
    if (this.currentRow >= 3 ) {
      this.setupRow();
    }
    if (image.index == this.state.images.length - 1) {
      this.setupRow();
    }
  } 

  setupRow() {
    var totalMargins = (this.currentImages.length - 1);
    var height = this.containerWidth / this.currentRow;
    this.height = height;
    this.resizeRow();
    this.currentImages = [];
    this.currentRow = 0;
  }

  resizeRow() {
    this.currentImages.forEach(function(currentImg) {
      this.resizeImgContainer(currentImg);
    }.bind(this));
  }

  resizeImgContainer(image) {
    var newPhotosArray = this.state.images.slice();

    newPhotosArray[image.index].styles = {
      'width': (this.height * image.ratio) + 'px',
      'height': (this.height) + 'px',
      'float': 'left'
    }
    this.setState({
      images: newPhotosArray,
    })
    /*
    var ratio = $(currentImg).data('ratio');
    $(currentImg).parent().width(this.height * ratio);
    $(currentImg).parent().height(this.height);
    $(currentImg).parent().css('padding', this.padding/2);
    */
  }

  
  render() {
    if (this.state.images) {
      return (
        <div>
          { 
            this.state.images.map(  ({image_url, width, height, styles}, idx) => {
              return <img key={idx} height={height} width={width} data-ratio={ width / height } src={ image_url } style={ styles } />
            }) 
          }
        </div>
      );
    }
    return <div></div>

    

    

  }
}

export default Masonry;