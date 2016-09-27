import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-sm-6 col-sm-offset-3">
					<SignupForm />
				</div>
			</div>
		);
	}
}

export default SignupPage;
