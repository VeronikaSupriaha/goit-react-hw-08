import React from 'react';
import AppBar from '/src/components/AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar> </AppBar>
      {children}
    </div>
  );
};
