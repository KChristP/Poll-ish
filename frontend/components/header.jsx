import React from 'react';
import {hashHistory, Link } from 'react-router';

class Header extends React.Component {
  componentWillReceiveProps(nextProps){
    if(!nextProps.currentUser && this.props.currentUser){
      hashHistory.push("/login")
    }
  }

  render(){
    let loginOrLogout;
    if (this.props.currentUser){
      loginOrLogout = (
        <div className="logout-button-container">
          <div className="welcome-name">{this.props.currentUser.email}!</div>
          <div className="login-box" onClick={this.props.logout}>
            <Link to="/login" className="login-link">Log Out</Link>
          </div>
        </div>
      );
    } else {
      loginOrLogout = (
        <div className="login-signup">
          <div className="login-box">
            <Link to="/login" className="login-link login-box">Login</Link>
          </div>
          <div className="login-box">
            <Link to="/signup" className="signup-link login-box">Sign up!</Link>
          </div>
        </div>
      );
    }

    return (
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
              <img src="assets/Pollishwhite.png" className="logo"/>
          </Link>
        </div>
        {loginOrLogout}
      </div>
    )
  }
}

export default Header;



// function Header({currentUser, logout}){
//   if (currentUser){
//     return logoutButton(currentUser, logout);
//   } else {
//     return sessionLinks();
//   }
// }
