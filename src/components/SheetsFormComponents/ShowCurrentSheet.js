import React from 'react';

const ShowCurrentSheet = ({sheet}) => {
  if (sheet.length > 0) {
    return (
      <div className="current-sheet">Sheet in progress:
        <span className="current-sheet-numbers">
          {sheet.map((el, i) => <span key={i} className="number-ball">{el}</span>)}
        </span>
      </div>
    );
  }
  return (<div></div>);
};

export default ShowCurrentSheet;
