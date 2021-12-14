import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../Loader/Loader';
import './Profile.css';

export const Profile = function () {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <Loader />;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user.picture} alt={user.nickname} />
        <h3>{user.nickname}</h3>
      </div>
    )
  );
};
