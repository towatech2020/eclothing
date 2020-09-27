import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

import ShopActionTypes from "./shop.types";

export const createUpdateCollectionsStart = () => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS_START,
});

export const createUpdateCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const createUpdateCollectionsFailure = (error) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS_FAILURE,
  payload: error 
});

export const createUpdateCollectionsSequence = () => (dispatch) => {
  dispatch(createUpdateCollectionsStart);
  const collectionRef = firestore.collection('collections');
  collectionRef.onSnapshot(async snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    console.log(collectionsMap);
    dispatch(createUpdateCollectionsSuccess(collectionsMap));
    // updateCollections(collectionsMap);
    // this.setState({loading: false});
  }, (error) => dispatch(createUpdateCollectionsFailure(error)));
}
