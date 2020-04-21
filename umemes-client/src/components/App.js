import '../css/App.css';
import Images from './ImageGallery.js';
import Sadness from './Sadness.js';
import Display from './Display.js';
import Search from './Search.js';
import {getImageUrl} from '../shared/functions.js';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [],
        searching: false,
        error: false,
        selectedUrl: "https://farm66.staticflickr.com/65535/47667567481_d3706410a1.jpg",
        selectedIndex: null
    };
    this.queryImages = this.queryImages.bind(this);
    this.selectImage = this.selectImage.bind(this);
  }
  selectImage(src) {
    // called when an image is clicked on in the gallery
    if(this.state.selectedIndex != null) {
      var oldImage = document.querySelector(`.memeimage-select:nth-of-type(${1 + this.state.selectedIndex})`);
      oldImage.classList.remove("selected-image");
    }
    this.setState({ selectedIndex: src, selectedUrl: getImageUrl(this.state.images[src])});
    var newImage = document.querySelector(`.memeimage-select:nth-of-type(${1 + src})`);
    newImage.classList.add("selected-image");
  }
  async queryImages(query) {
    // GET request using fetch with async/await
    try {
      const response = await fetch(`/search?q=${query}`);
      const data = await response.json();
      if(data && data.length > 0) {
        this.setState({ images: data, error: false});
      } else {
        this.setState({error: true, images: [], selectedIndex: null});
      }
    } catch(err) {
      this.setState({ error: true, images: [], selectedIndex: null});
    }
  }
  render() {
    return (
      <div className="App-wrap">
        <div className="navbar">
            <div className="meme-brand">
              UMemes
            </div>
        </div>
        <div className="meme-wrap">
          <div className="image-editor">
            <Display src={this.state.selectedUrl}/>
          </div>
          <div className="image-gallery">
            <Search queryImages={this.queryImages}/>
            {!this.state.error 
              ? <Images images={this.state.images} selectImage={this.selectImage}/> 
              : <Sadness />
            }
          </div>
        </div>
      </div>
    )
  }
}
export default App;

