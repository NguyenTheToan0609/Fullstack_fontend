import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      return {
        ...copyState,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_FAILED:
      state.genders = [];
      state.isLoadingGender = false;
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITIONS_SUCCESS:
      state.positions = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITIONS_FAILED:
      state.positions = [];
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLES_SUCCESS:
      state.roles = action.data;
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLES_FAILED:
      state.roles = [];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
