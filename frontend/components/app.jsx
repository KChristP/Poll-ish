import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>Poll-ish</h1></Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
