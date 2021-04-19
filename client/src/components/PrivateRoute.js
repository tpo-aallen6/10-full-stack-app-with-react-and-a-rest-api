import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from '../Context';

/*
Destructures and renamed the componenet prop in its parameters.
Collects any props that get passed in a ...rest variable
*/

export default ({ component: Component, ...rest }) => {
  return ( // The <Consumer> component subscribes PrivateRoute to all the actions and data provided by Context.js
    <Consumer>
      {context => (
        <Route
          {...rest}
          render={
              props => context.authenticatedUser
            ? (
              <Component {...props} />
              )
            :
              (
                <Redirect to={{
                  pathname: '/signin',
                  state: { from: props.location }
                }}
                />
              )
        }
        />
      )}
    </Consumer>
  );
};