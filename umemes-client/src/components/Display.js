import React from 'react';
import Toolbar from './Toolbar.js';

class Display extends React.Component {
    render() {
        return (
            <div>
            <div className="meme-display">
                <div className="meme-center">
                    <div className="meme-chosenImage">
                    <div id="meme-text-top" className="text-above"></div>
                        <img crossOrigin="anonymous" {...this.props} alt=""/>
                    <div id="meme-text-bottom"></div>
                    </div>
                </div>
            </div>
            <Toolbar/>
        </div>
        );
    }
}
export default Display;
