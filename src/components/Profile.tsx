import React from 'react';
import { Link } from 'gatsby';

const Profile = () => {
  return (
    <div className="dashboard-header">
      <nav>
        <Link
          to="/dashboard/secrete"
          activeClassName="active"
        >
          Secrete Stuff
        </Link>
        <Link
          to="/dashboard/base"
          activeClassName="active"
        >
          See Your Base
        </Link>
      </nav>
      <span>TODO: show login status</span>
    </div>
  )
};

export default Profile;
