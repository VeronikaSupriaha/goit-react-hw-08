import React from 'react';
import Navigation from '/src/components/Navigation/Navigation';
import AuthNav from '/src/components/AuthNav/AuthNav';
import UserMenu from '/src/components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation></Navigation>
      {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>}
    </header>
  );
};

export default AppBar;
