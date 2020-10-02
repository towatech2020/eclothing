import { all, put, takeLatest } from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import {
  createLogoutFailureAction,
  createLogoutSuccessAction,
  createSignInFailureAction,
  createSignInSuccessAction,
  createSignInWithGoogleFailureAction,
  createSignInWithGoogleSuccessAction,
  createSignUpFailureAction,
  createSignUpSuccessAction,
} from './user.actions';

import { UserActionTypes } from './user.types';

function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(email, password);
    console.log(`user is ${user}`);
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    yield put(
      createSignInSuccessAction({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(createSignInFailureAction(error));
  }
}

function* googleSignIn() {
  console.log(`google sign in start`);
  try {
    const { user } = yield signInWithGoogle();
    console.log(`user is ${user}`);
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    yield put(
      createSignInWithGoogleSuccessAction({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(createSignInWithGoogleFailureAction(error));
  }
}

function* signUp(action) {
  const { email, password, additionalData } = action.payload;

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, additionalData);
    yield put(createSignUpSuccessAction());
  } catch (error) {
    yield put(createSignUpFailureAction(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(createLogoutSuccessAction());
  } catch (error) {
    yield put(createLogoutFailureAction(error));
  }
}

function* signInWatcher() {
  yield takeLatest(UserActionTypes.USER_LOGIN_START, signIn);
}

function* signInWithGoogleWatcher() {
  yield takeLatest(UserActionTypes.GOOGLE_LOGIN_START, googleSignIn);
}

function* signUpWatcher() {
  yield takeLatest(UserActionTypes.USER_SIGNUP_START, signUp);
}

function* signOutWatcher() {
  yield takeLatest(UserActionTypes.USER_LOGOUT_START, signOut);
}

export default function* userSagas() {
  yield all([
    signInWatcher(),
    signInWithGoogleWatcher(),
    signUpWatcher(),
    signOutWatcher(),
  ]);
}
