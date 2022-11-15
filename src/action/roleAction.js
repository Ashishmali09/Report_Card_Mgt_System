import axios from "axios";
import * as actions from "./actionType";

const apiEndPoint = process.env.REACT_APP_API_URL + "roles";

export const getAllRoles = () => (dispatch, getState) => {
  axios
    .get(apiEndPoint)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: actions.GET_ALL_ROLES,
        payload: { roles: response.data },
      });
    })
    .catch((err) => console.log(err));
};

export const addRole = (data) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, data)
    .then((response) =>
      dispatch({
        type: actions.ADD_ROLES,
        payload: { role: response.data },
      })
    )
    .catch((err) => console.log(err));
};

export const deleteRole = (id) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + `/${id}`)
    .then((response) =>
      dispatch({
        type: actions.DELETE_ROLE,
        payload: { role: response.data },
      })
    )
    .catch((err) => console.log(err));
};
