import React from 'react'
import OnePair from './OnePair'

const Sneakers = ({sneakers, onAdd}) => {
 // const name="Naziv proizvoda";
  // const desc = "Neki opis mog proizvoda";
  //const prod = {
    //title: "Naziv proizvoda", 
    //description: "Neki opis mog proizvoda"
  //}

  return (
    <div className="all-sneakers">
        {sneakers.map((prod) => (
        <OnePair sneakers={prod} key={prod.id} onAdd={onAdd} />
      ))}
      {/*
        <OnePair sneakers={sneakers[0]}/>
        <OnePair sneakers={sneakers[1]}/>
  <OnePair sneakers={sneakers[2]}/>*/}
    </div>
  );
};

export default Sneakers;