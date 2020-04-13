import React from 'react';


class MemeImage extends React.Component {
    constructor(props) {
      super(props);
      this.memeClicked = this.memeClicked.bind(this);
    }
    memeClicked() {
        
        this.props.onImageClick(this.props.i);
    }
    render() {
        return (
            <img {...this.props} onClick={this.memeClicked}/>
        );
    }
}
export default MemeImage;
