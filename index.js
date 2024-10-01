import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

import React, { useState, useEffect } from 'react';
import './styles.css';

const fetchProducts = async () => {
    // Mocking an API call
    return [
        { id: 1, name: 'Product 1', price: 20, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 30, image: 'https://via.placeholder.com/150' },
    ];
};

const Product = ({ product, addToCart }) => (
    <div className="product">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
);

const Cart = ({ cartItems }) => (
    <div className="cart">
        <h2>Cart</h2>
        {cartItems.length === 0 ? <p>Cart is empty</p> : (
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        )}
    </div>
);

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>My E-commerce Store</h1>
            </div>
            <Cart cartItems={cart} />
            <div className="products">
                {products.map(product => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default App;
