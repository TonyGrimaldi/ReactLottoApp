import React from 'react';

const HandlerButtons = (props) => {
  const {
    sheet,
    number,
    addNumberToSheet,
    confirmSheet
  } = props;
  
  if (sheet.length === 6) 
    return (
      <button
        className="button-confirm-sheet"
        onClick={() => confirmSheet(sheet)}>
        Confirm Sheet
      </button>
    );
  return (
    <button
      className="button-add"
      onKeyPress={() => addNumberToSheet(number(), sheet)}
      onClick={() => addNumberToSheet(number(), sheet)}>
      Add number
    </button>
  );
}

export default HandlerButtons;