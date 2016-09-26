import React from 'react';

class SignupPage extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-sm-6 col-sm-offset-3">
					<h2>Sign up</h2>
					<hr />
					<form>
					  <div className="form-group">
					    <label htmlFor="mail">Email address</label>
					    <input type="email" className="form-control" id="mail" placeholder="Email" />
					  </div>
					  <div className="form-group">
					    <label htmlFor="pass">Password</label>
					    <input type="email" className="form-control" id="pass" placeholder="Password" />
					  </div>
					  <button type="submit" className="btn btn-default">Sign up</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SignupPage;