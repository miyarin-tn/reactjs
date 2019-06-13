import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <nav>
            <ul className="App-menu">
              <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Home;
