import './sign-up.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import React from 'react';
import { connect } from 'react-redux';
import { createSignUpStartAction } from '../../redux/user/user.actions';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { dispatchSignUpAction  } = this.props;

    if (password !== confirmPassword) {
      alert('passwords dont match');
      return;
    }

    dispatchSignUpAction({  email, password, additionalData: {displayName} });
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password,
    //   );
    //   createUserProfileDocument(user, { displayName });
    //   this.state = {
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //   };
    // } catch (error) {
    //   console.error(error);
    // }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`name: ${name} value: ${value}`);
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSignUpAction: (cred) => dispatch(createSignUpStartAction(cred)),
});

export default connect(null, mapDispatchToProps)(SignUp);
