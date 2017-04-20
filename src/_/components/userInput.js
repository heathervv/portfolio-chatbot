import React, { Component } from 'react';

class UserInput extends Component {
    render() {
        var userField = this.props.entryField.map(function(index) {
            if(this.props.entryField[0].type === 'textField') {
                let response, settings, addtlResponses, marker;

                if(this.props.entryField[0].response) {
                    response = this.props.entryField[0].response;
                }

                if(this.props.entryField[0].settings) {
                    settings = this.props.entryField[0].settings;
                }

                if(this.props.entryField[0].addtlResponses) {
                    addtlResponses = this.props.entryField[0].addtlResponses;
                }

                if(this.props.entryField[0].marker) {
                    marker = this.props.entryField[0].marker;
                }

                return (
                    <input key={index} type="text" id="messageField" data-response={response} data-settings={settings} data-addtl-responses={addtlResponses} data-marker={marker} />
                )
            } else {
                var buttons = this.props.entryField[0].response.map(function(index) {
                    if(index.constructor === Array) {
                        return (
                            <button className="button-medium" key={index} onClick={this.props.loadData.bind(null, index[0], index[1], index[3], index[2])}>{index[2]}</button>
                        )
                    } else {
                        return (
                            <button className="button-medium" key={index} onClick={this.props.loadData.bind(null, index)}>{index}</button>
                        )
                    }
                }.bind(this));
                return (
                    <div key={index} className="buttonWrapper">
                        <div>
                            {buttons}
                        </div>
                    </div>
                )
            }
        }.bind(this));

        return (
            <div className="userInput">
                {userField}
            </div>
        );
    }
}

export default UserInput;
