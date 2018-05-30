import React, { Component } from 'react';

import Header from './Header';
import SheetsForm from '../components/SheetsForm';
import Draw from '../components/Draw';

const App = (props) => {
  const { startDraw } = props;

  const handleRender = () => (
    startDraw === false ?
    <SheetsForm {...props} /> :
    <Draw {...props} />
  );

  return (
    <div className="app">
      <Header />
      {handleRender()}            
    </div>
  );
}

export default App;