
import React from 'react';
import * as html2canvas from 'html2canvas';
import '../css/editor.css';

class MemeImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionState: "above"
        };
        this.moveText = this.moveText.bind(this);
    }
    printImage() {
        var div = document.querySelector(".meme-chosenImage");
        try {
        html2canvas((div), {
            letterRendering: 1,
            allowTaint: false,
             useCORS: true
        }).then(function(canvas) {
            var myImage = canvas.toDataURL();
            var link = document.createElement("a");
            link.download = "LookAMeme.png";
            link.href = myImage;
            document.body.appendChild(link);
            link.click();
        });
        }   catch(err) {
            console.log(err)
        }
    }
    updateTextTop(e) {
        document.getElementById('meme-text-top').textContent = e.target.value;
    }
    updateTextBottom(e) {
        document.getElementById('meme-text-bottom').textContent = e.target.value;
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
    render() {
        return (
            <div className="meme-toolbar">
                <div className="toolbar-textposition">
                    <div className="toolbar-textposition-label">
                        Text Position:
                    </div>
                    <div className="toolbar-textposition-select">
                        <select value={this.state.optionState} onChange={this.moveText}>
                            <option value="above">Above</option>
                            <option value="middle">Overlay</option>
                            <option value="below">Below</option>
                        </select>
                    </div>
                </div>
                <input placeholder="Write a description..." className="meme-desc-top" type="text" onChange={this.updateTextTop}/>
                {this.state.optionState === "middle" && <input placeholder="Add another line..." className="meme-desc-bottom" type="text" onChange={this.updateTextBottom}/>}
                <div className="download-image" onClick={this.printImage}>
                    Download
                </div>
            </div>
        );
    }
}
export default MemeImage;
