import React, { useEffect, useState } from 'react'
import "./ProductBox.css"
import ProductCard from './../ProductCard/ProductCard';

export default function ProductBox(props) {
  const {list} = props

  

  return (
    <div className='pr-box'>
      {
       list.map((product)=>{
        return  <ProductCard key={product.name} name={product.name} price={product.price}></ProductCard>
       }) 
      }
    </div>
  )
}
