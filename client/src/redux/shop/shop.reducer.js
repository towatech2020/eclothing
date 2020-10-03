import ShopActionTypes from './shop.types';
const INITIAL_STATE = {
  collections: null,
  isCollectionsLoading: false,
  collectionsLoadingError: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS_START:
      return {
        ...state,
        isCollectionsLoading: true
      }
    case ShopActionTypes.UPDATE_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isCollectionsLoading: false
      }
    case ShopActionTypes.UPDATE_COLLECTIONS_FAILURE:
      return {
        ...state,
        collectionsLoadingError: action.payload,
        isCollectionsLoading: false
      }
    default:
      return state;
  }
};

export default shopReducer;
