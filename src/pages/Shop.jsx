import React, { useState } from 'react';
import useProducts from "../hooks/useProducts.jsx";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

function Shop() {
    const {products, loading, error} = useProducts();
    const [amounts, setAmounts] = useState({});

    if(loading) {
      return (
        <Button loading variant="outlined" style={{display: "flex", alignItems: "center"}}>
          Loading
        </Button>
      )
    }
    if(error) {
      return (
        <Button variant="outlined" color="error">
        Error loading items!
        </Button>
      )
    }

    const handleAmountChange = (productId, value) => {
      const num = Math.max(1, parseInt(value) || 1);
      setAmounts(prev => ({...prev, [productId]: num}));
    }

  return (
    <div className="shop-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <img src={product.image} alt={product.title} />
          <ButtonGroup size="small" variant="outlined" aria-label="Basic button group">
          </ButtonGroup>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
            <div style={{ display: 'flex', gap: '0.25rem' }}>

              <Button 
                onClick={() => handleAmountChange(product.id, (amounts[product.id] || 0) - 1)}
                style={{ flex: 1 }}
              >
                -
              </Button>

              <TextField 
                type="number" 
                slotProps={{ min: 1, style: { textAlign: 'center' } }}
                value={amounts[product.id] || 1}
                onChange={(e) => handleAmountChange(product.id, e.target.value)}
                size="small"
                style={{ flex: 1 }}
              />

              <Button 
                onClick={() => handleAmountChange(product.id, (amounts[product.id] || 0) + 1)}
                style={{ flex: 1 }}
              >
                +
              </Button>

            </div>
            <Button fullWidth variant="outlined">Add to Cart</Button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Shop;