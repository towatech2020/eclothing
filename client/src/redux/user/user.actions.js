import { UserActionTypes } from './user.types';

export const createSignInStartAction = (cred) => ({
  type: UserActionTypes.USER_LOGIN_START,
  payload: cred,
});

export const createSignInSuccessAction = (user) => ({
  type: UserActionTypes.USER_LOGIN_SUCCESS,
  payload: user,
});

export const createSignInFailureAction = (error) => ({
  type: UserActionTypes.USER_LOGIN_FAILURE,
  payload: error,
});

export const createSignInWithGoogleStartAction = () => ({
  type: UserActionTypes.GOOGLE_LOGIN_START,
});

export const createSignInWithGoogleSuccessAction = (user) => ({
  type: UserActionTypes.GOOGLE_LOGIN_SUCCESS,
  payload: user,
});

export const createSignInWithGoogleFailureAction = (error) => ({
  type: UserActionTypes.GOOGLE_LOGIN_FAILURE,
  payload: error,
});

export const createSignUpStartAction = (cred) => ({
  type: UserActionTypes.USER_SIGNUP_START,
  payload: cred,
});

export const createSignUpSuccessAction = () => ({
  type: UserActionTypes.USER_SIGNUP_SUCCESS,
});

export const createSignUpFailureAction = (error) => ({
  type: UserActionTypes.USER_SIGNUP_FAILURE,
  payload: error,
});

export const createLogoutStartAction = () => ({
  type: UserActionTypes.USER_LOGOUT_START,
});

export const createLogoutSuccessAction = () => ({
  type: UserActionTypes.USER_LOGOUT_SUCCESS,
});

export const createLogoutFailureAction = (error) => ({
  type: UserActionTypes.USER_LOGOUT_FAILURE,
  payload: error,
});
