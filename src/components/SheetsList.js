import React from 'react';

const SheetsList = (props) => {
  const { sheets } = props;
  const renderSheets = () => sheets.map((el,i) => 
    <li key={i} data-test-id="sheet">
      <span className="ordinal-numbers" data-test-id="ordinal">
        {i+1}º
      </span>
      <span className="sheet-numbers">
        {el.join(", ")}
      </span>
    </li>
    );
  return (
    <div data-test-id="sheets-list">
      <ul className="sheets-list">{renderSheets()}</ul>    
    </div>
  );
}

export default SheetsList;