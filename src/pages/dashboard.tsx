import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import PrivateRoute from '../components/PrivateRoute';
import RouteBase from '../components/RouteBase';
import RouteSecrete from '../components/RouteSecrete';
import RouteLogin from '../components/RouteLogin';

import 'react-netlify-identity-widget/styles.css';

const Dahsboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, []);

  const showModal = () => setVisibility(true);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secrete" component={RouteSecrete} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};

export default Dahsboard;
