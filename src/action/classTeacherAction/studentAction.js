import axios from "axios";
import * as actions from "../actionType";

const apiEndPoint = process.env.REACT_APP_API_URL + "students";

export const getAllStudents = () => (dispatch, getState) => {
  console.log("Action");
  axios
    .get(apiEndPoint)
    .then((response) => {
      // console.log(response.data);
      dispatch({
        type: actions.GET_ALL_STUDENTS,
        payload: { students: response.data },
      });
    })
    .catch((err) => console.log(err));
};

export const addStudent = (data) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, data)
    .then((response) =>
      dispatch({
        type: actions.ADD_STUDENTS,
        payload: { student: response.data },
      })
    )
    .catch((err) => console.log(err));
};

export const deleteStudent = (id) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + `/${id}`)
    .then((response) =>
      dispatch({
        type: actions.DELETE_STUDENT,
        payload: { student: response.data },
      })
    )
    .catch((err) => console.log(err));
};
