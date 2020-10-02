import ShopActionTypes from './shop.types';

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
