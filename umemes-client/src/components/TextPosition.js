import React from 'react';

class TextPosition extends React.Component {
    render() {
        return (
            <div className="toolbar-textposition">
                <div className="toolbar-textposition-label">
                    Text Position:
                </div>
                <div className="toolbar-textposition-select">
                    <select value={this.props.position} onChange={this.props.moveText}>
                        <option value="above">Above</option>
                        <option value="middle">Overlay</option>
                        <option value="below">Below</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default TextPosition;


