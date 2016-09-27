import React from 'react';
import map from 'lodash/map'
import timezone from '../../data/timezone.js';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
    };
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    const options = map(timezone, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>Join Now!</h1>
        <hr />

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange.bind(this)}
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Enter Your Username" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange.bind(this)}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter Your Email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange.bind(this)}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter Your Password" />
        </div>

        <div className="form-group">
          <label htmlFor="password-confirmation">Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange.bind(this)}
            type="password"
            name="passwordConfirmation"
            className="form-control"
            id="password-confirmation"
            placeholder="Password Confirmation" />
        </div>

        <div className="form-group">
          <label htmlFor="timezone">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            id="timezone"
            onChange={this.onChange.bind(this)}
            value={this.state.timezone}>
              <option value="" disabled>Choose Your Timezone</option>
              {options}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }

}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
