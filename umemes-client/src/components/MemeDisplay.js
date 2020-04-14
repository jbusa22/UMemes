import React from 'react';
import {getImageUrl} from '../shared/functions.js';

class MemeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionState: "above"
        };
        this.moveText = this.moveText.bind(this);
    }
    updateText(e) {
        document.getElementById('meme-text').textContent = e.target.value;
    }
    moveText(e) {
        var text = document.getElementById('meme-text');
        this.setState({optionState: e.target.value})
        switch (e.target.value) {
            case "above":
                text.classList.add("text-above");
                text.classList.remove("text-middle");
                text.classList.remove("text-below");
                break;
            case "middle":
                text.classList.remove("text-above");
                text.classList.add("text-middle");
                text.classList.remove("text-below");
                break;
            case "below":
                text.classList.remove("text-above");
                text.classList.remove("text-middle");
                text.classList.add("text-below");
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="meme-display">
                <div id="meme-text">

                </div>
                <div className="meme-chosenImage">
                    <img {...this.props} alt=""/>
                </div>
                <input type="text" onChange={this.updateText}/>
                <select value={this.state.optionState} onChange={this.moveText}>
                    <option value="above">Above</option>
                    <option value="middle">Middle</option>
                    <option value="below">Below</option>
                </select>
            </div>
        );
    }
}
export default MemeDisplay;
