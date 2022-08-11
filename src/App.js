import './App.css';
import NavBar from './components/NavBar';
import Sneakers from './components/Sneakers';
import { useState } from "react";



function App() {
  //let cartNum = 0;

  const [cartNum, setCartNum] = useState(0);
  const sneakers = [
    {
   id:1,
   title: "NIKE Patike Air Force 1 '07 LXX",
   description: "Nike Air Force 1 '07 LXX ženske lifestyle patike čine vaš stil zagrejanim. Ove patike su dodale zimsku notu onome što najbolje poznajete: prošivene slojeve na gornjištu i smele detalje. Uživaćete u udobnosti i lakoći nošenja ovih patika.  ",
   amount: 0,
    },

     {
     id: 2,
     title: "Adidas Patike FORUM LOW",
     description:
     "Simbol samoizražavanja od 1984. godine, ove patike inspirisane košarkom služe da pomeraju granice i ukažu ti šta sve možeš postići napornim radom. Poštujući činjenicu da ne bismo bili tu gde jesmo bez drugih, one pokazuju klasične timske boje.",
     amount: 0,
     },

     {
       id: 3,
       title: "NEW BALANCE Patike 237",
       description:
       "Ovaj model donosi sa sobom retro vibracije i odaje počast modelima iz prošlosti. Gornjište je izrađeno od mešavine mrežastih materijala, najlona i antilopa, što će doneti tvojim stopalima udobnost i prijatnost tokom celodnevnog nošenja.",
       amount: 0,
       },
 ];

 function addSneakers(title) {
  console.log("Dodat je proizvod: " + title);
  setCartNum(cartNum + 1);
 // console.log("Broj proizvoda u korpi: " + cartNum);
 }

  return ( 
  <div className="App">
    <NavBar cartNum={cartNum}></NavBar>
    <Sneakers sneakers={sneakers} onAdd={addSneakers}/>
    </div>
  
  );
}

export default App;
