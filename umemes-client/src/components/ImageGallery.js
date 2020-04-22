import React from 'react';
import MemeImage from './Image';
import '../css/flexbin.css';
import '../css/images.css';
import {getImageUrl} from '../shared/functions.js';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: ''
        };
    }
    render() {
        return (
                <div className="meme-selection flexbin">
                    {Array.isArray(this.props.images) && this.props.images.map((value, i) => {
                        return <MemeImage key={"meme-select" + i} className="memeimage-select" i={i} 
                                src={getImageUrl(value)} onImageClick={this.props.selectImage}/>
                    })}
                </div>
        );
    }
}
export default ImageGallery;
