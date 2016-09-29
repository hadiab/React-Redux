import React from 'react';
import map from 'lodash/map'
import timezone from '../../data/timezone.js';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validation/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    };
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid(){
    const { errors, isValid } = validateInput(this.state);

    if(!isValid){
      this.setState({ errors })
    }

    return isValid;
  }

  onSubmit(e){
    e.preventDefault();
    if(this.isValid()){
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {},
        ({ data }) => this.setState({ errors: data, isLoading: false })
      );
    }
  }

  render() {
    const { errors } = this.state;
    const options = map(timezone, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div></div>
        <h1>Join Now!</h1>
        <hr />

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange.bind(this)}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange.bind(this)}
          value={this.state.email}
          field="email"
          type="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange.bind(this)}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange.bind(this)}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

        <div className={classnames('form-group', { 'has-error': errors.timezone} )}>
          <label htmlFor="timezone"><strong>Timezone</strong></label>
          <select
            className="form-control"
            name="timezone"
            id="timezone"
            onChange={this.onChange.bind(this)}
            value={this.state.timezone}>
              <option value="" disabled>Choose Your Timezone</option>
              {options}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>

        <button disabled={this.state.isLoading} type="submit" className="btn btn-primary">Sign up</button>

      </form>
    );
  }

}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
