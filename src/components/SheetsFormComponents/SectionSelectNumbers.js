import React from 'react';

import ShowCurrentSheet from './ShowCurrentSheet';
import HandlerButtons from './HandlerButtons';

const SectionSelectNumbers = (props) => { 
  const {
    number,
    sheet,
    sheets,
    currentNumber,
    setCurrentNumber,
    addNumberToSheet,
    confirmSheet,
    deleteLastNumberFromSheet
  } = props;

  const instructions = () => {
    if(sheet.length > 0 || sheets.length > 0 ) return (<div></div>);
    return (
      <ul className="instructions">
        <li>
          <p>Please insert a number (range 1-90) in the Yellow Ball and then click on ADD NUMBER or press Enter.</p>
        </li>
        <li>
          <p>Once you have composed a sheet with 6 numbers, will appear the button CONFIRM SHEET. Click on it to confirm your Sheet.</p>
        </li>
        <li>
          <p>Feel you free to add as many sheets you want, however, already after the first ticket confirmed will be available the DRAW section, in fact will appear on the screen the button DRAW NUMBERS. Click on it when your sheets list is ready and you want to move on to the next step.</p>
        </li>
      </ul>
    );
  }

  return (
    <section className="section-select-numbers">
      <div className="row">
        <div className="col span-2-of-3">
          {instructions()}
          <ShowCurrentSheet sheet={sheet} />
        </div>
        <div className="col span-1-of-3">
          <div className="input-group">
            <input
              type="number"
              className="input-number"
              onChange={setCurrentNumber}
              onKeyDown={(e) => { if (e.key === "Enter") addNumberToSheet(number(), sheet)}}
              placeholder={sheet.length === 6 ? "" : "+"}
              value={currentNumber}
            />            
            <HandlerButtons
              sheet={sheet}
              number={number}
              addNumberToSheet={addNumberToSheet}
              confirmSheet={confirmSheet}
            />
            <button
              className="button-delete"
              onClick={deleteLastNumberFromSheet}>delete Number</button>
          </div>
        </div>
      </div>    
    </section>
  );
};

export default SectionSelectNumbers;

