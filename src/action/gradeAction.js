import axios from "axios";
import * as actions from "./actionType";

const apiEndPoint = process.env.REACT_APP_API_URL + "grades";

export const getAllGrades = () => (dispatch, getState) => {
  axios
    .get(apiEndPoint)
    .then((response) =>
      dispatch({
        type: actions.GET_ALL_GRADES,
        payload: { grades: response.data },
      })
    )
    .catch((err) => console.log(err));
};

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

export const deleteGrade = (id) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + `/${id}`)
    .then((response) =>
      dispatch({
        type: actions.DELETE_GRADE,
        payload: { grade: response.data },
      })
    )
    .catch((err) => console.log(err));
};
