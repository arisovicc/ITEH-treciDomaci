import React from 'react'
import {BsFillPlusCircleFill} from "react-icons/bs";
import {BsDashCircleFill} from "react-icons/bs";


//za CSS koristimo camelCase notaciju 
//koristimo inlineCSS 

//function OneProduct(props) {
  function OneProduct({product, onAdd}) {
  //console.log(props);

//function onAdd(title) {
  //console.log("Dodat proizvod: " + title);
//}

function onDelete(title) {
console.log("Obrisan proizvod" + title);
}

  return (
    <div className="card" style={{margin: 10, borderStyle: "dotted"}}>
        <img
        className="card-img-top" 
        src="https:/picsum.photos/200"
        alt="Neka slika" 
        />
        <div className="card-body">
          <h3 className='card-title'>{product.title}</h3>
          <p className="card-text">{product.description}</p>
    </div>
    {/*<button className="btn" onClick={() => onAdd(product.title)}><BsFillPlusCircleFill/></button>*/}
    <button className="btn" onClick={() => onAdd(product.title)}><BsFillPlusCircleFill/></button>
    <button className="btn" onClick={() => onDelete(product.title)}><BsDashCircleFill/></button>
</div>
  )
}

export default OneProduct