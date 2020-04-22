
import React from 'react';
import '../css/editor.css';
import TextPosition from './TextPosition.js';
import Download from './Download.js';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionState: "above"
        };
        this.moveText = this.moveText.bind(this);
    }
    moveText(e) {
        var textTop = document.getElementById('meme-text-top');
        var textBottom = document.getElementById('meme-text-bottom');
        var displayImage = document.querySelector('.meme-chosenImage');
        if(this.state.optionState === "middle" && e.target.value !== "middle") {
            textBottom.textContent = '';
        }       
        this.setState({optionState: e.target.value});
        switch (e.target.value) {
            case "above":
                textTop.classList.add("text-above");
                textTop.classList.remove("text-middle");
                displayImage.classList.remove("text-below");
                break;
            case "middle":
                textTop.classList.remove("text-above");
                textTop.classList.add("text-middle");
                displayImage.classList.remove("text-below");
                break;
            case "below":
                textTop.classList.remove("text-above");
                textTop.classList.remove("text-middle");
                displayImage.classList.add("text-below");
                break;
            default:
                break;
        }
    }    
    updateTextTop(e) {
        document.getElementById('meme-text-top').textContent = e.target.value;
    }
    updateTextBottom(e) {
        document.getElementById('meme-text-bottom').textContent = e.target.value;
    }
    render() {
        return (
            <div className="meme-toolbar">
                <TextPosition moveText={this.moveText} position={this.state.optionState}/>
                <input placeholder="Write a description..." className="meme-desc-top" type="text" onChange={this.updateTextTop}/>
                {this.state.optionState === "middle" && 
                    <input placeholder="Add another line..." className="meme-desc-bottom" type="text" onChange={this.updateTextBottom}/>
                }
                <Download/>
            </div>
        );
    }
}
export default Toolbar;
