import {
  RESET_DRAW,
  START_DRAW
} from '../actions/constants';

export const initialState = {
  startDraw: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_DRAW:
      return {
        ...state,
        startDraw: false
      };
    case START_DRAW:
      return {
        ...state,
        startDraw: true
      }
    default: return state;
  }
}
