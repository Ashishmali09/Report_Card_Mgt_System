import * as actions from "../action/actionType";

export const standardReducer = (state = { standards: [] }, action) => {
  switch (action.type) {
    case actions.GET_ALL_STANDARDS:
      return { ...state, standards: action.payload.standards };

    case actions.ADD_STANDARDS:
      console.log("data");
      // console.log(action.payload.standard);

      return {
        ...state,
        standards: [...state.standards, { ...action.payload.standard }],
      };

    case actions.UPDATE_STANDARD:
      const updatesArr = [...state.standards];
      return { ...state, standards: updatesArr };

    case actions.DELETE_STANDARD:
      const delArr = state.standards.filter(
        (s) => s._id !== action.payload.standard._id
      );

      return {
        ...state,
        standards: delArr,
      };

    default:
      return state;
  }
};
