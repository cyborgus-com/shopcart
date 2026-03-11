import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export function CartProvider({children}) {
    const[cartItems, setCartItems] = useState([]);

    const addToCart = (product, amount) => {
        // check if product in cart - if yes, increase amount, 
        // else - add new item
        setCartItems(prev => {
            const exists = prev.find(item=>item.productId === product.id);
            if (exists) {
                return prev.map(item =>
                    item.productId === product.id
                      ? {...item, amount: item.amount + amount}
                      : item
                );
            }
            return [...prev, { productId: product.id, title: product.title, price: product.price, image: product.image, amount }];
        })
    };

    const getTotalItems = () => cartItems.reduce((sum, item) => sum + item.amount, 0);

    const updateAmount = (productId, newAmount) => {
        if (newAmount <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems(prev => prev.map(item => 
                item.productId === productId ? {...item, amount: newAmount} : item
            ));
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.productId !== productId));
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, getTotalItems, updateAmount, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}