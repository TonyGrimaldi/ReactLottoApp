import {
  ADD_SHEET,
  DELETE_LAST_SHEET,
  RESET_SHEETS
} from '../actions/constants';

export const initialState = {
  sheets: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SHEET:
      return {
        ...state,
        sheets: [...state.sheets, [...action.payload]]
      };
    case DELETE_LAST_SHEET:
      return {
        ...state,
        sheets: state.sheets.slice(0, state.sheets.length - 1)
      };
    case RESET_SHEETS:
      return {
        ...state,
        sheets: []
      };
    default: return state;
  }
}