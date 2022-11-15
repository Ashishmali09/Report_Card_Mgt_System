import * as actions from "../action/actionType";

export const divisionReducer = (state = { divisions: [] }, action) => {
  switch (action.type) {
    case actions.GET_ALL_DIVISIONS:
      console.log(action.payload.divisions);
      return { ...state, divisions: action.payload.divisions };

    case actions.ADD_DIVISIONS:
      console.log("data");
      console.log(action.payload.division);
      return { ...state, divisions: action.payload.division };

    default:
      return state;
  }
};
