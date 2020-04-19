import React from 'react';
import MemeToolbar from './MemeToolbar.js';

class MemeDisplay extends React.Component {
    render() {
        return (
            <div>
            <div className="meme-display">
                <div className="meme-center">
                    <div className="meme-chosenImage">
                    <div id="meme-text-top" className="text-above"></div>
                        <img {...this.props} alt=""/>
                    <div id="meme-text-bottom"></div>
                    </div>
                </div>
            </div>
            <MemeToolbar/>
        </div>
        );
    }
}
export default MemeDisplay;
