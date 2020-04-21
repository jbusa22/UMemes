import React from 'react';

class Image extends React.Component {
    constructor(props) {
      super(props);
      this.memeClicked = this.memeClicked.bind(this);
    }
    memeClicked() {
        this.props.onImageClick(this.props.i);
    }
    render() {
        return (
            <img className={this.props.className} src={this.props.src} onClick={this.memeClicked} alt=""/>
        );
    }
}
export default Image;
