import { combineReducers } from 'redux';
import handleDrawReducer from './handleDrawReducer';
import sheetsReducer from './sheetsReducer';

const rootReducer = combineReducers({
  handleDraw: handleDrawReducer,
  listOfSheets: sheetsReducer,
});

export default rootReducer;
