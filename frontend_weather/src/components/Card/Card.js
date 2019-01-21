import React from 'react';
import PropTypes from 'prop-types';

import classes from './Card.module.css';
import { icons } from './icons';

const card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.desc}>
        {props.date}
      </div>
      {icons[props.icon]}
      <div className={classes.temp}>
        {props.temperature}&deg;C
      </div>
      <div className={classes.desc}>{props.description}</div>
    </div>
  );
};

card.propTypes = {
  temperature: PropTypes.number.isRequired, // Temperature in Celsius
  description: PropTypes.string.isRequired, // Weather Description
  icon: PropTypes.string.isRequired         // Specify which weather icon to use
};

export default card;
