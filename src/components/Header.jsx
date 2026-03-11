import React from 'react';
import Button from '@mui/material/Button';

function Header() {
  return (
    <div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
      <Button variant="contained" color="primary">Home</Button>
      <Button variant="contained" color="primary">Shop</Button>
      <Button variant="contained" color="primary">Cart</Button>
    </div>
  );
}

export default Header;