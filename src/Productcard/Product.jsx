import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { data } from 'react-router-dom';
// import Login from '../Authentication/Login';
import '../pages/product.css'
import { BiCookie } from 'react-icons/bi';
// import Singlecard from './Singlecard';
import { useNavigate } from 'react-router-dom';

function Product() {

    const [data, setdata] = useState([])
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products?limit=12');
            setdata(res.data); // Update state with resolved data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const carthandler = (product) => {
        const { id: id, title: title, image: image, price: price } = product;
        console.log(product)
    }

    const handleCardClick = (product) => {
        // navigate('/Singlecard'); // Navigate and pass product data
        navigate('/Singlecard', { state: product }); // Navigate and pass product data
        sessionStorage.setItem('product', JSON.stringify(product));
        // console.log('Product clicked:', product);
    };






    return (
        <div>
            <h1>Product...</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {
                    data.map((item, index) => {
                        return (
                            <div className="product-card" key={index}
                            >
                                <img src={item.image} alt={item.title}
                                    onClick={() => handleCardClick(item)} // Navigate on click
                                    style={{ cursor: 'pointer' }}
                                    className="product-image" />
                                <div className="product-info">
                                    <h3 className="product-title">{item.title}</h3>
                                    <div className="product-price">{item.price}</div>
                                    <div className="product-buttons">
                                        <button className="add-to-cart" onClick={() => carthandler(item)} >Add to Cart</button>
                                        <button className="add-to-cart">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <Login /> */}
        </div>
    )
}

export default Product
