import React from 'react';
import useAuthStore from '../hooks/useAuthStore';

type Props = {};

export default function User({}: Props) {
  const { loggedInUser, logout } = useAuthStore((state: any) => state);
  return (
    <div>
      {loggedInUser?.email}
      {loggedInUser && (
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      )}

      {!loggedInUser && <div>Not logged in</div>}
    </div>
  );
}
