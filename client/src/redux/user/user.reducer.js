import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_SUCCESS:
    case UserActionTypes.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.USER_LOGIN_FAILURE:
    case UserActionTypes.GOOGLE_LOGIN_FAILURE:
    case UserActionTypes.USER_SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.USER_LOGOUT_SUCCESS:
    case UserActionTypes.USER_LOGOUT_ERROR:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
