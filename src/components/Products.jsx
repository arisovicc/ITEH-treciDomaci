import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products, onAdd}) => {
 // const name="Naziv proizvoda";
  // const desc = "Neki opis mog proizvoda";
  //const prod = {
    //title: "Naziv proizvoda", 
    //description: "Neki opis mog proizvoda"
  //}

  return (
    <div className="all-products">
        {products.map((prod) => (
        <OneProduct product={prod} key={prod.id} onAdd={onAdd} />
      ))}
      {/*
        <OneProduct product={products[0]}/>
        <OneProduct product={products[1]}/>
  <OneProduct product={products[2]}/>*/}
    </div>
  );
};

export default Products;