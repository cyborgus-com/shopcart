import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-content">
        <Button variant="outlined" color="primary" onClick={() => navigate('/')}>Home</Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/shop')}>Shop</Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/cart')}>Cart</Button>
        <IconButton onClick={() => navigate('/cart')}>
          <Badge badgeContent={2} color="primary" overlap="circular">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </IconButton>
      </div>
    </header>
  );
}

export default Header;