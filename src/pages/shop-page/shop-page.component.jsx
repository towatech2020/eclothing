import './shop-page.styles.scss';

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUpdateCollectionsSequence } from '../../redux/shop/shop.actions';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { updateCollections } = this.props;
    updateCollections();
  }

  render() {
    const { match } = this.props;
    // console.log(`is loading: ${isLoading}`);
    return (
      <div className="shop-page">
        {/* <CollectionsOverview /> */}
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: () => dispatch(createUpdateCollectionsSequence())
})

export default connect(null, mapDispatchToProps)(ShopPage);
