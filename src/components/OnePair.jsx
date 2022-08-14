import React from 'react'
import {BsFillPlusCircleFill} from "react-icons/bs";
import {BsDashCircleFill} from "react-icons/bs";

function OnePair({sneakers, onAdd, inCart}) {
  const stil = {margin:1 + "em", borderStyle:"dotted"};

function onDelete(title) {
console.log("Obrisan proizvod" + title);
}


return (
  <div className={inCart === 1 ? "card" : "card-cart"} style={stil}>
    <img
      className={inCart === 1 ? "card-img-top" : "card-img-left"}
      src="https:/picsum.photos/200"
      alt="Neka slika"
    />
    <div className="card-body">
      <h3 className="card-title">{sneakers.title}</h3>
      <p className="card-text">{sneakers.description}</p>
    </div>
    {/* <button className="btn" onClick={() => onAdd(sneakers.title)}> */}
    {inCart === 1 ? (
      <>
        <button
          className="btn"
          onClick={() => onAdd(sneakers.title, sneakers.id)}
        >
          <BsFillPlusCircleFill />
        </button>
        <button className="btn">
          <BsFillPlusCircleFill />
        </button>
      </>
    ) : (
      <h4>Amount: {sneakers.amount}</h4>
    )}
  </div>
);
}

export default OnePair;