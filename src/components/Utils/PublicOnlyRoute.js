import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <Redirect to={'/'} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}

export default PublicOnlyRoute;
//TODO:Change redirect to inventory page
