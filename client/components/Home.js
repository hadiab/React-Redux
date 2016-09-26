import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<div className="jumbotron">
		  <h1>React-Redux App</h1>
		  <p>Welcome to React-Redux App, it will be the new generation of apps.</p>
		  <p>
		  	<Link to="/signup" className="btn btn-primary btn-lg">Getting Started</Link>
		  </p>
		</div>
	);
}