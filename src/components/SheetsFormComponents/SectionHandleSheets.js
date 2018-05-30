import React from 'react';

import { DELETE_LAST_SHEET, START_DRAW } from '../../actions/constants';
import SheetsList from '../SheetsList';

const SectionHandleSheets = (props) => {
  const { handleSheets, handleDraw, sheets } = props;
  
  const buttonRemoveSheet = () => {
    if (sheets.length > 0) {
      return (
        <button
          className="button-remove-sheet"
          onClick={() => handleSheets(DELETE_LAST_SHEET)}>
          REMOVE SHEET
        </button>
      )}
    return (<div></div>);
  };

  const buttonStartDraw = () => {
    if (sheets.length > 0) {
      return (
        <button
            className="button-start-draw"
            onClick={() => handleDraw(START_DRAW)}>
            CLICK HERE TO START DRAW
        </button>
    )}
    return (<div></div>)
  };

  return (
    <section className="section-handle-sheets">
      <div className="row handle-sheets-row">
        <div className="col span-1-of-3 sheets-list-title center">
          <p>⇩ YOUR SHEETS LIST ⇩</p>
        </div>
        <div className="col span-1-of-3">
          {buttonRemoveSheet()}
        </div>
        <div className="col span-1-of-3 center">
          {buttonStartDraw()}
        </div>
      </div>
      <div className="row">
        <div className="col span-2-of-3">
          <SheetsList sheets={sheets} />
        </div>
      </div>
    </section>
  );
}

export default SectionHandleSheets;