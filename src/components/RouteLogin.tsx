import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';

interface Props {
  showModal: () => void;
}

const RouteLogin = ({ showModal }: RouteComponentProps & Props) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate('/dashboard/secrete', { replace: true });
  }

  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={showModal}>Log In</button>
    </>
  );
};

export default RouteLogin;
