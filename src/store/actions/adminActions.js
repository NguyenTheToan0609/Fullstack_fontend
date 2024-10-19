import actionTypes from "./actionTypes";
import { getAllCode, createNewUser } from "../../services/userService";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCode("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      dispatch(fetchGenderFailed());
      console.log(e);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionsStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCode("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionsSuccess(res.data));
      } else {
        dispatch(fetchPositionsFailed());
      }
    } catch (e) {
      dispatch(fetchPositionsFailed());
      console.log(e);
    }
  };
};

export const fetchPositionsSuccess = (positionsData) => ({
  type: actionTypes.FETCH_POSITIONS_SUCCESS,
  data: positionsData,
});

export const fetchPositionsFailed = () => ({
  type: actionTypes.FETCH_POSITIONS_FAILED,
});

export const fetchRolesStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCode("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRolesSuccess(res.data));
      } else {
        dispatch(fetchRolesFailed());
      }
    } catch (e) {
      dispatch(fetchRolesFailed());
      console.log(e);
    }
  };
};

export const fetchRolesSuccess = (rolesData) => ({
  type: actionTypes.FETCH_ROLES_SUCCESS,
  data: rolesData,
});

export const fetchRolesFailed = () => ({
  type: actionTypes.FETCH_ROLES_FAILED,
});

export const createNewUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUser(data);
      console.log("check create redux ", res);
      if (res && res.errCode === 0) {
        dispatch(saveUserSuccess());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      dispatch(saveUserFailed());
      console.log(e);
    }
  };
};

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED,
});
