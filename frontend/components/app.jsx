import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header_container';

const App = ({children}) => (
  <div>
    <header className="header-container">
      <Link to="/"><h1>Poll-ish</h1></Link>
      <HeaderContainer />
    </header>
    {children}
  </div>
);

export default App;
