import React from 'react'
import {BsFillPlusCircleFill} from "react-icons/bs";
import {BsDashCircleFill} from "react-icons/bs";


//za CSS koristimo camelCase notaciju 
//koristimo inlineCSS 

//function OnePair(props) {
  function OnePair({sneakers, onAdd}) {
  //console.log(props);

//function onAdd(title) {
  //console.log("Dodat proizvod: " + title);
//}

function onDelete(title) {
console.log("Obrisan proizvod" + title);
}

  return (
    <div className="card" src="slika1.png" style={{margin: 10, borderStyle: "solid"}} >
        <img className="card-img-top" 
        src="https:/picsum.photos/200"
        alt="Neka slika" 
        />
        <div className="card-body">
          <h3 className='card-title'>{sneakers.title}</h3>
          <p className="card-text">{sneakers.description}</p>
    </div>
    {/*<button className="btn" onClick={() => onAdd(sneakers.title)}><BsFillPlusCircleFill/></button>*/}
    <button className="btn" onClick={() => onAdd(sneakers.title)}><BsFillPlusCircleFill/></button>
    <button className="btn" onClick={() => onDelete(sneakers.title)}><BsDashCircleFill/></button>
</div>
  )
}

export default OnePair