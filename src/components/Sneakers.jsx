import React from 'react'
import OnePair from './OnePair'

const Sneakers = ({sneakers, onAdd}) => {

  return (
    <div className="all-sneakers">
        {sneakers.map((prod) => (
        <OnePair sneakers={prod} key={prod.id} onAdd={onAdd} inCart={1} />
      ))}
      {/*
        <OnePair sneakers={sneakers[0]}/>
        <OnePair sneakers={sneakers[1]}/>
  <OnePair sneakers={sneakers[2]}/>*/}
    </div>
  );
};

export default Sneakers;