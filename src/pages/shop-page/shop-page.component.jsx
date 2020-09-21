import './shop-page.styles.scss';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import React from 'react';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    {/* <CollectionsOverview /> */}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
