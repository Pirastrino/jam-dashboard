import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { RouteComponentProps } from '@reach/router';
import { useIdentityContext } from 'react-netlify-identity';

interface Props {
  component: React.FC<RouteComponentProps>;
}

const PrivateRoute = ({
  component: Component,
  location,
  ...rest
}: RouteComponentProps & Props) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  if (!isLoggedIn && location.pathname !== '/dashboard/login') {
    navigate('/dashboard/login', { replace: true });
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
