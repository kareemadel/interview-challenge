import React, { Component } from 'react';

import Forecast from './containers/Forecast/Forecast';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className={classes.title}>Weatheria</div>
        <Forecast />
      </div>
    );
  }
}

export default App;
