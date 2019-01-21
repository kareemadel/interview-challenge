import * as actionTypes from './actionTypes';
import axios from '../../axios-forecast';

export const setForecast = (forecastData) => ({
  type: actionTypes.SET_FORECAST_DATA,
  forecastData
});

export const fetchFailed = (error) => ({
  type: actionTypes.FETCH_FORECAST_FAILED,
  error
});

export const initForecast = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/forecast');
      dispatch(setForecast(data));
    } catch (error) {
      dispatch(fetchFailed(error));
    }
  };
};
