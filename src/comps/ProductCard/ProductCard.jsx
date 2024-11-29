import React from 'react'
import "./ProductCard.css"
export default function ProductCard(props) {
  const {name,price} = props;
  return (
    <div className='Card'>
      <p className='product-name'>{name}</p>
      <p className='product-price'>₹{price}.00</p>
    </div>
  )
}
