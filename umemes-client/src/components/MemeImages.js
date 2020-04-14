import React from 'react';
import MemeImage from './MemeImage';
import MemeDisplay from './MemeDisplay';
import {getImageUrl} from '../shared/functions.js';


class MemeImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: ''
        };
        this.clickedImage = this.clickedImage.bind(this);
    }
    clickedImage(i) {
        this.setState({ src: getImageUrl(this.props.images[i])});
    }
    render() {
        return (
            <div className="memes">
                <MemeDisplay src={this.state.src}/>
                <div className="meme-selection">
                    {Array.isArray(this.props.images) && this.props.images.map((value, i) => {
                        return <MemeImage key={"meme-select" + i} className="memeimage-select" i={i} 
                                src={getImageUrl(value)} onImageClick={this.clickedImage}/>
                    })}
                </div>
            </div>
        );
    }
}
export default MemeImages;
