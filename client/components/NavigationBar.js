import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<nav className="navbar navbar-default">
		  <div className="container">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <Link to="/" className="navbar-brand">React-Redux App</Link>
		    </div>
		    <div id="navbar" className="collapse navbar-collapse">
		      <ul className="nav navbar-nav">
		        <li className="active">
		        	<Link to="/signup" className="navbar-brand">Sign up</Link>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	);
}