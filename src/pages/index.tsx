import React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>This App Rules!</h1>
    <p>Log in to find out why.</p>
    <Link to="/dashboard">Go to the dashboard</Link>
  </Layout>
)
