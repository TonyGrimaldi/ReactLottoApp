import React from 'react';

const NumbersMatchedList = (props) => {
  const { sheets, drawnNumbers } = props;
        
  const numbersMatched = () => {
    let listOfMatched = sheets.map(el => []);
    sheets.map((sheet, i) =>
      drawnNumbers.map(number => {
        if (sheet.indexOf(number) !== -1) listOfMatched[i].push(number);
      })
    )
    return listOfMatched;
  };

  return (
    <ul className="sheets-list">
      {numbersMatched().map((el, i) => (
        <li key={i}>
          <span className="ordinal-numbers">
            {i+1}º
          </span>
          <span className="points">
            {el.length} matched numbers:
          </span>
          <span className="sheet-numbers">
            {el.join(", ")}
          </span>
        </li>
        )
      )}
    </ul>
  )
};

export default NumbersMatchedList;