import React from 'react';
import AppBar from '/src/components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBar></AppBar>
      <Outlet></Outlet>
    </div>
  );
};
