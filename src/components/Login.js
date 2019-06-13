import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: '',
      password: ''
    });
  }
  render() {
    if (sessionStorage.getItem('user')) return  <Redirect to="/users" />
    
    return (
      <div className="App">
        <div className="App-wrapper">
          <p className="App-title">Login</p>
          <form onSubmit={this.onLogin}>
            <table className="App-table">
              <tbody>
                <tr>
                  <td><label htmlFor="username">Username</label></td>
                  <td>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor="password">Password</label></td>
                  <td>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button type="submit">Login</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onLogin = (e) => {
    e.preventDefault();
    if (this.state.username === 'admin' && this.state.password) {
      sessionStorage.setItem('user', JSON.stringify({ username: this.state.username }));
      this.props.history.push('/users');
    }
  }
}

export default Login;
