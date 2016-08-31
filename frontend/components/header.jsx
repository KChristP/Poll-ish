import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {
  render(){
    let loginOrLogout;
    if (this.props.currentUser){
      loginOrLogout = (
        <div className="logout-button-container">
          <div className="welcome-name">Logged in as: {this.props.currentUser.email}!</div>
          <button className="logout-button-itself" onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      loginOrLogout = (
        <div className="login-signup">
          <Link to="/login" className="login-link">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" className="signup-link">Sign up!</Link>
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
