import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const {cartItems, updateAmount, removeFromCart} = useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map(item => (
        <div key={item.productId} className="cart-item-card">
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Price: ${item.price} × {item.amount} = ${(item.price * item.amount).toFixed(2)}</p>
            <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem', alignItems: 'center' }}>
              <Button 
                size="small" 
                onClick={() => updateAmount(item.productId, item.amount - 1)}
                style={{ width: '40px' }}
              >
                -
              </Button>
              <TextField 
                type="number" 
                slotProps={{ input: { style: { textAlign: 'center' } } }}
                value={item.amount}
                onChange={(e) => updateAmount(item.productId, parseInt(e.target.value) || 0)}
                size="small"
                style={{ width: '60px' }}
              />
              <Button 
                size="small" 
                onClick={() => updateAmount(item.productId, item.amount + 1)}
                style={{ width: '40px' }}
              >
                +
              </Button>
              <IconButton size="small" onClick={() => removeFromCart(item.productId)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
          <img src={item.image} alt={item.title} className="cart-item-image" />
        </div>
        
      ))}
      <h2>Total: ${cartItems.reduce((sum, item) => sum + (item.price*item.amount), 0).toFixed(2)}</h2>
    </div>
  );
}

export default Cart;