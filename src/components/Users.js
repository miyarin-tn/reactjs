import React from 'react';
import { Switch, Route, Redirect, NavLink, Link } from 'react-router-dom';
import logo from '../logo.svg';

const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={`${match ? 'active' : ''}`}><Link to={to}>{label}</Link></li>
      )}
    />
  )
};

class Users extends React.Component {
  render() {
    if (!sessionStorage.getItem('user')) return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
    return (
      <div className="App">
        <div className="App-wrapper">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <Switch>
            {this.props.routes.map((prop, index) => {
              return (
                <Route
                  key={index}
                  path={this.props.match.url === '/' ? prop.path : this.props.match.url + prop.path}
                  name={prop.name}
                  component={prop.component}
                />
              );
            })}
          </Switch>
          <nav>
            <ul className="App-menu">
              <li><NavLink to="/users/thanh-ngoc" activeClassName="active">Thanh Ngọc</NavLink></li>
              <CustomLink to="/users/xuan-thinh" label="Xuân Thịnh"></CustomLink>
              <li><NavLink to="/users/my-kieu" activeClassName="active">Mỹ Kiều</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Users;
