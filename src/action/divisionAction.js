import axios from "axios";
import * as actions from "./actionType";

const apiEndPoint = process.env.REACT_APP_API_URL + "divisions";

export const getAllDivisions = () => (dispatch, getState) => {
  axios
    .get(apiEndPoint)
    .then((response) =>
      dispatch({
        type: actions.GET_ALL_DIVISIONS,
        payload: { divisions: response.data },
      })
    )
    .catch((err) => console.log(err));
};

export const addDivision = (data) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, data)
    .then((response) =>
      dispatch({
        type: actions.ADD_DIVISIONS,
        payload: { division: response.data },
      })
    )
    .catch((err) => console.log(err));
};
