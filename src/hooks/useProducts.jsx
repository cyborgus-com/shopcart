import {useState, useEffect} from 'react';

function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            setProducts(products);
            setLoading(false);
        })
        .catch(error => {
            setError(err);
            setLoading(false);
        });
    }, []);
    return {products, loading, error};
}

export default useProducts;