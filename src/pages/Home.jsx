import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Home() {
  const navigate = useNavigate();
  const { products, loading, error } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    if (!products.length) return;

    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  if (!products.length) return <div>No products</div>;

  const current = products[currentIndex];
  const prevProduct = () => {
    setDirection('left');
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  };
  const nextProduct = (e) => {
    e.stopPropagation();
    setDirection('right');
    setCurrentIndex(prev => (prev + 1) % products.length);
  };
  const handleNavigateToShop = () => navigate('/shop');

  return (
    <div style={{ width: '100%', userSelect: 'none' }}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', textAlign: 'center', position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer' }} onClick={handleNavigateToShop}>
        <div key={currentIndex} style={{ animation: direction === 'right' ? 'slideInRight 0.5s ease' : 'slideInLeft 0.5s ease' }}>
          <img 
            src={current.image} 
            alt={current.title} 
            style={{ maxWidth: '90%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <IconButton 
          onClick={prevProduct}
          style={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: 'white' }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
        <IconButton 
          onClick={nextProduct}
          style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: 'white' }}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </div>
      <div style={{ padding: '1.5rem', textAlign: 'center', cursor: 'pointer' }} onClick={handleNavigateToShop}>
        <h2>{current.title}</h2>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>${current.price}</p>
        <p style={{ fontSize: '0.9rem', color: '#999' }}>{currentIndex + 1} / {products.length}</p>
      </div>
    </div>
  );
}

export default Home;