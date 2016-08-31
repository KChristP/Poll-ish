import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header_container';
// import HowItWorks from './how_it_works'


const App = ({children}) => (
  <div>
    <header >
      <HeaderContainer />
    </header>
    {children}
  </div>
);

export default App;
