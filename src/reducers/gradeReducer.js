import * as actions from "../action/actionType";

export const gradeReducer = (state = { grades: [] }, action) => {
  switch (action.type) {
    case actions.GET_ALL_GRADES:
      return { ...state, grades: action.payload.grades };

    case actions.DELETE_GRADE:
      const delArr = state.grades.filter(
        (s) => s._id !== action.payload.grade._id
      );

      return {
        ...state,
        grades: delArr,
      };

    default:
      return state;
  }
  //     case actions.ADD_STANDARDS:
  //       console.log("data");
  //       // console.log(action.payload.standard);

  //       return {
  //         ...state,
  //         standards: [...state.standards, { ...action.payload.standard }],
  //       };
};

