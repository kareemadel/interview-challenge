import * as actionTypes from '../actions/actionTypes';
import { updateObject, cloneDeep } from '../utility';

const initialState = {
  forecastData: null,
  error: null
};

const setForecast = (state, action) => {

  let forecastData = cloneDeep(action.forecastData);
  forecastData.forEach(d => d.date = new Date(d.date));
  return updateObject(state, { forecastData });
};

const setError = (state, action) => {
  return updateObject(state, {
    error: cloneDeep(action.error)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_FORECAST_DATA: return setForecast(state, action);
  case actionTypes.FETCH_FORECAST_FAILED: return setError(state, action);
  default: return state;
  }
};

export default reducer;
