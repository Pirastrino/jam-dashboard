import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';
import { get } from 'lodash';

interface Props {
  showModal: () => void;
}

const Profile = ({ showModal }: Props) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  const name = get(identity, 'user.user_metadata.full_name', '');

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/secrete" activeClassName="active">
            Secrete Stuff
          </Link>
          <Link to="/dashboard/base" activeClassName="active">
            See Your Base
          </Link>
        </nav>
        <span>Logged in as {name}</span>
        <button onClick={showModal}>Log Out</button>
      </div>
    )
  );
};

export default Profile;
