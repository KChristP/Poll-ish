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
          <div className="welcome-name">Logged in as: {this.props.currentUser.email}!</div>
          <div className="login-box">
            <Link to="/login" className="login-link" onClick={this.props.logout}>Log Out</Link>
          </div>
        </div>
      );
    } else {
      loginOrLogout = (
        <div className="login-signup">
          <div className="login-box">
            <Link to="/login" className="login-link">Login</Link>
          </div>
          <div className="login-box">
            <Link to="/signup" className="signup-link">Sign up!</Link>
          </div>
        </div>
      );
    }

    return (
      <div className="header-container">
        <Link to="/">
            <img src="assets/Pollishlogo1.png" className="logo"/>
        </Link>
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
