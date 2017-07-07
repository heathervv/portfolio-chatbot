import React from 'react';
import PropTypes from 'prop-types';

const UserInput = (props) => {
  const userField = props.entryField.map((index) => {
    if(props.entryField[0].type === 'textField') {
      const response = props.entryField[0].response ? props.entryField[0].response : '';
      const settings = props.entryField[0].settings ? props.entryField[0].settings : '';
      const addtlResponses = props.entryField[0].addtlResponses ? props.entryField[0].addtlResponses : '';
      const marker = props.entryField[0].marker ? props.entryField[0].marker : '';

      return (
          <input
            key={index}
            type="text"
            id="messageField"
            data-response={response}
            data-settings={settings}
            data-addtl-responses={addtlResponses}
            data-marker={marker}
            autoFocus />
      );
    } else {
      const buttons = props.entryField[0].response.map((index) => {
        if(index.constructor === Array) {
          return (
            <button
              className="button-medium"
              key={index}
              onClick={props.loadData.bind(null, index[0], index[1], index[3], index[2])}>
                {index[2]}
            </button>
          );
        } else {
          return (
            <button
              className="button-medium"
              key={index}
              onClick={props.loadData.bind(null, index)}>
                {index}
            </button>
          );
        }
      });

      return (
        <div key={index} className="buttonWrapper">
          <div>
            {buttons}
          </div>
        </div>
      );
    }
  });

  return (
    <div className="userInput">
      {userField}
    </div>
  );
};

UserInput.propTypes = {
  entryField: PropTypes.array
};

export default UserInput;
