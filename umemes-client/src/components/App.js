import '../css/App.css';
import MemeImages from './MemeImages.js';
import MemeSadness from './MemeSadness.js';
import MemeDisplay from './MemeDisplay.js';
import MemeSearch from './MemeSearch.js';
import {getImageUrl} from '../shared/functions.js';

import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [],
        searching: false,
        error: false,
        selectedUrl: "https://farm3.staticflickr.com/2792/4124602734_5a83cc8566.jpg",
        selectedIndex: null
    };
    this.queryImages = this.queryImages.bind(this);
    this.selectImage = this.selectImage.bind(this);
  }
  selectImage(src) {
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
      console.log(err.message);
      this.setState({ error: true, images: [], selectedIndex: null});
    }
  }
  render() {
    return (
      <div className="App-wrap">
        <div className="navbar">
            <div className="meme-brand">UMemes</div>
        </div>
        <div className="meme-wrap">
          <div className="image-editor">
            
            <MemeDisplay src={this.state.selectedUrl}/>
          </div>
          <div className="image-gallery">
            <MemeSearch queryImages={this.queryImages}/>
            {!this.state.error ? <MemeImages images={this.state.images} selectImage={this.selectImage}/> : <MemeSadness />}
          </div>
        </div>
      </div>
    )
  }
}
export default App;
