import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { data } from 'react-router-dom';
// import Login from '../Authentication/Login';
import '../pages/product.css'  


function News() {

    const [data, setdata] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            setdata(res.data); // Update state with resolved data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            <h1>news...</h1>
            <div style={{display: 'flex', flexWrap: 'wrap',gap: '10px', justifyContent: 'center'}}>
                {
                    data.map((item, index) => {
                        return (
                            <div className="product-card" key={index}>
                                <img src={item.image} alt={item.title}  className="product-image" />
                                <div className="product-info">
                                    <h3 className="product-title">{item.title}</h3>
                                    {/* <p className="product-description">{item.description}</p> */}
                                    <div className="product-price">{item.price}</div>
                                    <div className="product-buttons">
                                        <button className="add-to-cart">Add to Cart</button>
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

export default News
