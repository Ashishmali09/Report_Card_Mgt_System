// import { type } from "@testing-library/user-event/dist/type";
// import axios from "axios";
// import * as actions from "./actionType";

// const apiEndPoint = process.env.REACT_APP_API_URL + "standards";

// export const getAllStandards = () => (dispatch, getState) => {
//   axios
//     .get(apiEndPoint)
//     .then((response) =>
//       dispatch({
//         type: actions.GET_ALL_STANDARDS,
//         payload: { standards: response.data },
//       })
//     )
//     .catch((err) => console.log(err));
// };

// export const addStandard = (data) => (dispatch, getState) => {
//   axios
//     .post(apiEndPoint, data)
//     .then((response) =>
//       dispatch({
//         type: actions.ADD_STANDARDS,
//         payload: { standard: response.data },
//       })
//     )
//     .catch((err) => console.log(err));
// };

// export const deleteStandard = (id) => (dispatch, getState) => {
//   axios
//     .delete(apiEndPoint + `/${id}`)
//     .then((response) =>
//       dispatch({
//         type: actions.DELETE_STANDARD,
//         payload: { standard: response.data },
//       })
//     )
//     .catch((err) => console.log(err));
// };

// export const updateStandard = (data) => (dispatch, getState) => {
//   axios
//     .put(apiEndPoint + `/${data._id}`, data)
//     .then((response) =>
//       dispatch({
//         type: actions.UPDATE_STANDARD,
//         payload: { standard: response.data },
//       })
//     )
//     .catch((err) => console.log(err));
// };
