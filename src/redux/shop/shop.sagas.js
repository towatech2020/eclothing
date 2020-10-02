import { all, put, takeLatest } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import {
  createUpdateCollectionsFailure,
  createUpdateCollectionsSuccess,
} from './shop.actions';

import ShopActionTypes from './shop.types';

function* updateCollections() {
  try {
    const collectionRef = yield firestore.collection('collections');
    const collectionSnapshot = yield collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(collectionSnapshot);
    console.log(collectionsMap);
    yield put(createUpdateCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(createUpdateCollectionsFailure(error));
  }
}

function* updateCollectionsWatcher() {
  yield takeLatest(ShopActionTypes.UPDATE_COLLECTIONS_START, updateCollections);
}

export default function* shopSagas() {
  yield all([updateCollectionsWatcher()]);
}
