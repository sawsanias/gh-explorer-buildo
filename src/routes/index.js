import React from 'react';
import { Route, RouteHandler } from 'react-router';

class Root extends React.Component {
  render = () => {
    <div>
      <div> This is a test </div>
      <RouteHandler />
    </div>;
  }
}

export default (
  <Route name='root' handler={Root} />
);
