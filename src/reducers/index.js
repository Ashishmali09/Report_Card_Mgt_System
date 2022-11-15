import { standardReducer } from "./standardReducer";
import { combineReducers } from "redux";
import { divisionReducer } from "./divisionReducer";
import { roleReducer } from "./roleReducer";
import { gradeReducer } from "./gradeReducer";
import { studentReducer } from "./classTeacherReducers/studentReducer";

export default combineReducers({
  standardReducer,
  divisionReducer,
  roleReducer,
  gradeReducer,
  studentReducer,
});
