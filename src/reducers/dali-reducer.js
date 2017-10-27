import { ActionTypes } from '../actions';

const initialState = {
  members: [],
};

const DaliReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DALI_MEMBERS:
      return Object.assign({}, state, {
        members: action.payload.members,
      });
    default:
      return state;
  }
};

export default DaliReducer;
