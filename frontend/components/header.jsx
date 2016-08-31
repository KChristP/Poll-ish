import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </div>
);

const logoutButton = (currentUser, logout) => (
	<div>
		<h2 className="welcome-name">Hi, {currentUser.email}!</h2>
    <button className="logout-button" onClick={logout}>Log Out</button>
	</div>
);

function Header({currentUser, logout}){
  if (currentUser){
    return logoutButton(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default Header;
