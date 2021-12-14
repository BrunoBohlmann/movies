import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = function () {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  );
};
