import React from 'react'


function Singlecard() {
    
    const getproduct = sessionStorage.getItem('product')
    const product = getproduct ? JSON.parse(getproduct) : null;

    // console.log('getproduct', getproduct)

  
    
    return (
        <>
            <div className="container">
                <h1>Singlecard</h1>
                {product ? (
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
                    </div>
                ) : (
                    <p>No product data found!</p>
                )}
            </div>
        </>
    )
}

export default Singlecard