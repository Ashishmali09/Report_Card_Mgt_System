import * as actions from "../../action/actionType";

export const studentReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case actions.GET_ALL_STUDENTS:
      return { ...state, students: action.payload.students };

    case actions.DELETE_STUDENT:
      const delArr = state.students.filter(
        (s) => s._id !== action.payload.student._id
      );

      return {
        ...state,
        students: delArr,
      };

    default:
      return state;
  }
};
