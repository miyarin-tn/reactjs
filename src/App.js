import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            render={props => (<route.component {...props} routes={route.routes} />)}
          />
        );
      })}
    </Switch>
  );
}

export default App;
