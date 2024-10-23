import actionTypes from "./actionTypes";
import {
  getAllCode,
  createNewUser,
  getAllUser,
  deleteUser,
  editUser,
  getTopDoctorHomeService,
} from "../../services/userService";
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

//Lấy ra gender
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

//Lấy ra position
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

//Lấy ra role
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

//tạo người dùng
export const createNewUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUser(data);
      if (res && res.errCode === 0) {
        toast.success("Add new a user succed");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
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

//Lấy tất cả người dùng
export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUser("ALL");

      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        dispatch(fetchAllUsersFailed());
      }
    } catch (e) {
      dispatch(fetchAllUsersFailed());
      console.log(e);
    }
  };
};

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});

export const fetchAllUsersFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILED,
});

//Xoá người dùng
export const deleteUsersStart = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUser(userId);
      console.log("check res ", res);
      if (res && res.errCode === 0) {
        toast.success("Delete user succeed !");
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Delete user error !");
        dispatch(deleteUsersFailed());
      }
    } catch (e) {
      toast.error("Delete user error !");

      dispatch(deleteUsersFailed());
      console.log(e);
    }
  };
};

export const deleteUsersSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUsersFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

//Edit người dùng
export const editUsersStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUser(data);
      console.log("check res ", res);
      if (res && res.errCode === 0) {
        toast.success("Update user succeed !");
        dispatch(editUsersSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Update user error !");
        dispatch(editUsersFailed());
      }
    } catch (e) {
      toast.error("Update user error !");

      dispatch(editUsersFailed());
      console.log(e);
    }
  };
};

export const editUsersSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUsersFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});

//Lấy tất cả các role là bác sĩ
export const fetchTopDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHomeService("");
      if (res && res.errCode === 0) {
        dispatch(fetchAllTopDoctorSuccses(res.data));
      } else {
        dispatch(fetchAllTopDoctorFailed());
      }
    } catch (e) {
      dispatch(fetchAllTopDoctorFailed());
      console.log(e);
    }
  };
};

export const fetchAllTopDoctorSuccses = (data) => ({
  type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
  dataDoctors: data,
});

export const fetchAllTopDoctorFailed = () => ({
  type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
});
