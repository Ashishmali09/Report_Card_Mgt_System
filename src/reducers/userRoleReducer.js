// import * as actions from "../action/actionType";

// export const roleReducer = (state = { roles: [] }, action) => {
//   switch (action.type) {
//     case actions.GET_ALL_ROLES:
//       return { ...state, roles: action.payload.roles };

//     case actions.ADD_ROLES:
//       console.log(action.payload.role);
//       // console.log(action.payload.standard);

//       return {
//         ...state,
//         roles: [...state.roles, action.payload.role],
//       };

//     case actions.DELETE_ROLE:
//       const delArr = state.roles.filter(
//         (s) => s._id !== action.payload.role._id
//       );

//       return {
//         ...state,
//         roles: delArr,
//       };

//     default:
//       return state;
//   }
// };
