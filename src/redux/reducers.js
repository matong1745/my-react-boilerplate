import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import parameter from './parameter/reducer';

export const reducers = combineReducers({
  parameter,
  router: routerReducer
});
