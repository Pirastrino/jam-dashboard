import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import RouteBase from '../components/RouteBase';
import RouteSecrete from '../components/RouteSecrete';
import RouteLogin from '../components/RouteLogin';

const Dahsboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, []);

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecrete path="/dashboard/secrete" />
        <RouteLogin path="/dashboard/login" />
      </Router>
      <p>TODO: create a dashboard</p>
    </Layout>
  );
};

export default Dahsboard;
