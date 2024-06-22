import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '/src/redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p> Welcome, {user.name} </p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
