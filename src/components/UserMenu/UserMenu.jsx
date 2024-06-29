import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '/src/redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispath = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispath(logout());
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleClick} type="button">
        Logout
      </button>
    </div>
  );
}
