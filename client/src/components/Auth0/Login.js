import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// MaterialUI
import Button from '@mui/material/Button';

export const LoginButton = function () {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="outlined"
      color="secondary"
      size="small"
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};
