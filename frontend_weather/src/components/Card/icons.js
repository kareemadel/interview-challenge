import React from 'react';

import classes from './Card.module.css';

// export the weather icons
export const icons = {
  'shower': (
    <div className={classes.icon}>
      <div className={classes.cloud}></div>
      <div className={classes.sun}>
        <div className={classes.rays}></div>
      </div>
      <div className={classes.rain}></div>
    </div>
  ),
  'thunder': (
    <div className={classes.icon}>
      <div className={classes.cloud}></div>
      <div className={classes.lightning}>
        <div className={classes.bolt}></div>
        <div className={classes.bolt}></div>
      </div>
    </div>
  ),
  'cloudy': (
    <div className={classes.icon}>
      <div className={classes.cloud}></div>
      <div className={classes.cloud}></div>
    </div>
  ),
  'snow': (
    <div className={classes.icon}>
      <div className={classes.cloud}></div>
      <div className={classes.snow}>
        <div className={classes.flake}></div>
        <div className={classes.flake}></div>
      </div>
    </div>
  ),
  'sunny': (
    <div className={classes.icon}>
      <div className={classes.sun}>
        <div className={classes.rays}></div>
      </div>
    </div>
  ),
  'rainy': (
    <div className={classes.icon}>
      <div className={classes.cloud}></div>
      <div className={classes.rain}></div>
    </div>
  )
};
