import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from "../context/CartContext.jsx";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function Header() {
  const navigate = useNavigate();
  const {getTotalItems} = useContext(CartContext);
  const total = getTotalItems();

  return (
    <header>
      <div className="header-content">
        <Button variant="outlined" color="primary" onClick={() => navigate('/')}>Home</Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/shop')}>Shop</Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/cart')}>Cart</Button>
        <IconButton onClick={() => navigate('/cart')}>
          <Badge badgeContent={total || 0} color="primary" overlap="circular">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </IconButton>
      </div>
    </header>
  );
}

export default Header;