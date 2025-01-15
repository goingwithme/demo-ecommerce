import React from 'react'
// import News from '../Newscom/News'
// import './product.css' 
import News from '../Newscom/News'
function Home() {
  return (
    <>
      <div>
        <div>Home</div>
        {/* <div className="product-card">
          <img src="#" a className="product-image" />
          <div className="product-info">
            <h3 className="product-title">title</h3>
            <p className="product-description">description</p>
            <div className="product-price">price</div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div> */}

        <News />
      </div>
    </>
  )
}

export default Home