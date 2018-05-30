import React, { Component } from 'react';

import { ADD_SHEET } from '../actions/constants';
import SectionSelectNumbers from './SheetsFormComponents/SectionSelectNumbers';
import SectionHandleSheets from './SheetsFormComponents/SectionHandleSheets';

export default class SheetsForm extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      currentNumber: '',
      currentSheet: [],
      rules: {
        maxNumber: 90,
        minNumber: 1,
        sheetLength: 6,
      }
    };
    this.setCurrentNumber = this.setCurrentNumber.bind(this);
    this.getNumber = this.getNumber.bind(this);
    this.isValidNumber = this.isValidNumber.bind(this);
    this.allowAddNumberToSheet = this.allowAddNumberToSheet.bind(this);
    this.addNumberToSheet = this.addNumberToSheet.bind(this);
    this.deleteLastNumberFromSheet = this.deleteLastNumberFromSheet.bind(this);
    this.confirmSheet = this.confirmSheet.bind(this);
  }
  
  setCurrentNumber(event) {
    this.setState({ currentNumber: event.target.value });
  }

  getNumber(number) {
    if (isNaN(parseInt(number, 10))) {
      throw "element is not a number"
    }
    else return parseInt(number, 10);
  }

  isValidNumber(number) {
    if (this.getNumber(number) < this.state.rules.minNumber
      || this.getNumber(number) > this.state.rules.maxNumber) {
      return false;
    }
   else return true;
  }

  allowAddNumberToSheet(number, sheet) {
    if (sheet.length < this.state.rules.sheetLength
      && sheet.indexOf(this.getNumber(number)) === -1
    ) {
      return true;
    }
    return false;
  }

  addNumberToSheet(number, sheet, event) {
    if (this.isValidNumber(number)
      && this.allowAddNumberToSheet(number, sheet)) {
        this.setState(prevState => ({
          currentSheet: [...prevState.currentSheet, this.getNumber(number)],
          currentNumber: "",
        }));
      }
  }

  deleteLastNumberFromSheet() {
    this.setState(prevState => ({
      currentSheet: prevState.currentSheet.slice(0, prevState.currentSheet.length - 1)
    }));
  }

  confirmSheet(sheet) {
    if (sheet.length === this.state.rules.sheetLength) {
      this.props.handleSheets(ADD_SHEET, sheet);
      this.setState({ currentSheet: [] });
    }
  }

  render() {
    const {
      sheets,
      handleSheets,
      handleDraw
    } = this.props;

    const renderSheetForm = () => (
      <div>
        <section className="title">
          <p>Compose your sheets with six numbers for each one and and try to win our rich Jackpot</p>
        </section>
        <SectionSelectNumbers 
          setCurrentNumber={this.setCurrentNumber}
          number={() => this.getNumber(this.state.currentNumber)} 
          sheet={this.state.currentSheet}
          sheets={sheets}
          addNumberToSheet={this.addNumberToSheet}
          deleteLastNumberFromSheet={this.deleteLastNumberFromSheet}
          confirmSheet={this.confirmSheet}
          currentNumber={this.state.currentNumber}
        />
        <SectionHandleSheets
          handleSheets={handleSheets}
          sheets={sheets}
          handleDraw={handleDraw}
        />
      </div> 
    );

    return (
      <div>{renderSheetForm()}</div>
    );
  }
}