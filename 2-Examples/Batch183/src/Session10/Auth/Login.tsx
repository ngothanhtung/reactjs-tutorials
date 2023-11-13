import React from 'react';
import useAuthStore from '../hooks/useAuthStore';

type Props = {};

export default function Login({}: Props) {
  const { login, loggedInUser } = useAuthStore((state: any) => state);
  return (
    <div>
      {!loggedInUser && (
        <button
          onClick={() => {
            login('tungnt@softech.vn', '123456789');
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
