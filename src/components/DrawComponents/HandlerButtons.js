import React from 'react';
import {
  RESET_DRAW,
  RESET_SHEETS
} from '../../actions/constants';

const HandlerButtons = (props) => {
  const {
    drawOnClick,
    sheetLength,
    maxNumber,
    drawnNumbers,
    startDraw,
    handleDraw,
    handleSheets
  } = props;
  
  if (drawnNumbers.length === 6) 
    return (
      <button
        className="button-remove-sheet"
        onClick={() => {
          handleSheets(RESET_SHEETS);
          handleDraw(RESET_DRAW);
        }
      }>
        Restart Game
      </button>
    );
  return (
    <button
      className="button-start-draw"
      onClick={() => drawOnClick(sheetLength, maxNumber)}>
        draw Numbers!
    </button>
  );
}

export default HandlerButtons;