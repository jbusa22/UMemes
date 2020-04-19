import React from 'react';


class MemeImage extends React.Component {
    render() {
        return (
            <div className="meme-sadness-box">
                  <div className="meme-sadness-text">
                    No images found!
                    <div className="helpful-hint">
                      Try looking up cat pics
                    </div>
                  </div>
            </div>
        );
    }
}
export default MemeImage;
