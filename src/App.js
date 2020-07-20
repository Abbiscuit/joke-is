import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/profile"
          render={props => {
            return <Profile {...props} title="佐藤ジョージ" />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
