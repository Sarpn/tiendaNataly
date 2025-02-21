import React from 'react'
import ShoppingCart from '../shopping-cart/shopping-cart'
import { useLocation } from 'react-router-dom'

const SellSumary = () => {
  let location = useLocation();

  const products = location.state.products;

  return (
    <>
        <h1>Resumen de compras</h1>
        <ShoppingCart products={products} />
    </>
    
)
}

export default SellSumary