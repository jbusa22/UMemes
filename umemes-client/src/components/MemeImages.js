import React from 'react';
import MemeImage from './MemeImage';


class MemeImages extends React.Component {
    constructor(props) {
      super(props);
    }
    clickedImage(i) {
        console.log(i);
    }
    render() {
        return (
            <div className="memes">
                {this.props.images && this.props.images.map((value, i) => {
                    var url = "https://farm" + value.farm + ".staticflickr.com/" 
                            + value.server + "/" + value.id + "_" + value.secret + ".jpg";
                    return <MemeImage key={"meme-select" + i} className="memeimage-select" i={i} 
                            src={url} value={value} onImageClick={this.clickedImage}/>
                })}
            </div>
        );
    }
}
export default MemeImages;
