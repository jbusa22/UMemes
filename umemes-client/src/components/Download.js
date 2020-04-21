import React from 'react';
import * as html2canvas from 'html2canvas';

class Download extends React.Component {
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
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div className="download-image" onClick={this.printImage}>
                Download
            </div>
        );
    }
}
export default Download;

