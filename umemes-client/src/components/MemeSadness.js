
import React from 'react';


class MemeImage extends React.Component {
    render() {
        return (
            <div className="no-memes-found-box">
                  <div className="meme-sadness">
                    No memes found!
                  </div>
                  <div className="helpful-hint">
                    Maybe try a different query?
                  </div>
            </div>
        );
    }
}
export default MemeImage;
