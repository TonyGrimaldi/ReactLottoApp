import React, { Component } from 'react';

import SheetsList from './SheetsList';
import NumbersMatchedList from './DrawComponents/NumbersMatchedList';
import HandlerButtons from './DrawComponents/HandlerButtons';

export default class Draw extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      drawnNumbers: [],  
      rules: {
        maxNumber: 90,
        minNumber: 1,
        sheetLength: 6,
      }
    }

    this.getDrawnNumbers = this.getDrawnNumbers.bind(this);
    this.drawOnClick = this.drawOnClick.bind(this);
  }

  getDrawnNumbers(sheetLength, maxNum) {
    let sheet = [];
    while (sheet.length < sheetLength) {
      let drawnNumber = Math.floor((Math.random() * maxNum) + 1);
      if (maxNum < sheetLength) return;
      if (this.state.drawnNumbers.length > 0) { 
        alert("Error, you can't do more then a draw");
        throw("Error");
      }
      if (sheet.indexOf(drawnNumber) === -1) sheet.push(drawnNumber)
    }
    return sheet;
  }

  drawOnClick(sheetLength, maxNum) {
    let drawnNumbers = this.getDrawnNumbers(sheetLength, maxNum);
    for (let i = 0; i < drawnNumbers.length; i++) {
      setTimeout(() => 
        this.setState({
          drawnNumbers: [...this.state.drawnNumbers, drawnNumbers[i]]
        }), 3000 * i)
    }
  }

  render() {
    const { sheets, startDraw, handleDraw, handleSheets } = this.props;
    return (
      <section className="draw">
        <div className="row drawn-numbers">
          <div className="col span-1-of-3">
            <HandlerButtons 
              drawOnClick={this.drawOnClick}
              sheetLength={this.state.rules.sheetLength}
              maxNumber={this.state.rules.maxNumber}
              drawnNumbers={this.state.drawnNumbers}
              startDraw={startDraw}
              handleDraw={handleDraw}
              handleSheets={handleSheets}
            />
          </div>
          <div className="col span-2-of-3">
            {this.state.drawnNumbers.map((el, i) =>
              <span key={i} className="number-ball">{el}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col span-1-of-2">
            <h2>My Sheets List</h2>
          </div>
          <div className="col span-1-of-2">
            <h2>My Points</h2>
          </div>
        </div>
        <div className="row">
          <div className="col span-1-of-2">
            <SheetsList sheets={sheets} />
          </div>
          <div className="col span-1-of-2">
            <NumbersMatchedList
              sheets={sheets}
              drawnNumbers={this.state.drawnNumbers} 
            />
          </div>
        </div>         
      </section>
    );
  }
}
