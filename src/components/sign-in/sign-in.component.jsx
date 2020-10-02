import './sign-in.styles.scss';

import {
  createSignInStartAction,
  createSignInWithGoogleStartAction,
} from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import React from 'react';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatchSignInAction } = this.props;

    dispatchSignInAction({ email, password });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { dispatchSignInWithGoogleAction   } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={dispatchSignInWithGoogleAction}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSignInAction: (cred) => dispatch(createSignInStartAction(cred)),
  dispatchSignInWithGoogleAction: (cred) =>
    dispatch(createSignInWithGoogleStartAction()),
});

export default connect(null, mapDispatchToProps)(SignIn);
