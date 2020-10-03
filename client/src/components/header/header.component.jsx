import './header.styles.scss';

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import React from 'react';
import { connect } from 'react-redux';
import { createLogoutStartAction } from '../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden, dispatchSignOutAction }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink className="option" to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink
          as="div"
          className="option"
          onClick={() => dispatchSignOutAction()}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? <CartDropdown /> : null}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchSignOutAction: () => dispatch(createLogoutStartAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
