import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

const LeftDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        {/* Drawer content goes here */}
        <div style={{ width: '250px' }}>
          <h2>Drawer Content</h2>
          <p>Put your navigation items here...</p>
        </div>
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
