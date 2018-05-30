import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jackpot: ""
    }
    this.setJackpot = this.setJackpot.bind(this);
  }

  setJackpot() {
    const jackpot = Math.floor(Math.random() * 10000000) + 100000;
    if (this.state.jackpot.length === 0) this.setState({ jackpot: jackpot }); 
  }

  componentWillMount() {
    this.setJackpot();
  }

  render() {
    return (
      <div className="lotto-header">
        <div className="lotto-logo">
        </div>
        <p id="jackpot">Jackpot today: 
          <span id="jackpot-size">
            € {this.state.jackpot.toLocaleString()}
          </span>
        </p>
      </div>
    );
  };
}

