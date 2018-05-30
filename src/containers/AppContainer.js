import React, { Component } from 'react';
import { connect } from 'react-redux';

import createHoc from './HigherOrderContainer';
import App from '../components/App';
import { handleDraw } from './../actions/handleDrawAction';
import { handleSheets } from './../actions/sheetsAction';

export default connect(
  state => ({
    sheets: state.listOfSheets.sheets,
    startDraw: state.handleDraw.startDraw,
  }),{
  handleDraw,
  handleSheets
  })(createHoc(App))
