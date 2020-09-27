import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShop],
  (shop) => shop.collections ? Object.values(shop.collections) : [],
);

export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam],
  ),
);

export const selectShopCollectionsLoadingStatus = createSelector(
  [selectShop],
  (shop) => shop.isCollectionsLoading
);

export const selectShopCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

