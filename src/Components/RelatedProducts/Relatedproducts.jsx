import React, { useEffect, useState } from 'react'
import './Relatedproducts.css'
import { Item } from '../Item/Item'
export const Relatedproducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/related_products')
    .then((response)=>response.json())
    .then((data)=>setRelatedProducts(data))
  },[]);
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
            {relatedProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name = {item.name}
                image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
            })}
        </div>
    </div>
  )
}
