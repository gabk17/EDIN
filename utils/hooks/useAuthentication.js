import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user
  };
}