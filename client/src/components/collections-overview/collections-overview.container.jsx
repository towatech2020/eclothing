import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from "../with-spinner/with-spinner.component";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsLoadingStatus } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopCollectionsLoadingStatus,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;
