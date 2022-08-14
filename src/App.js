import './App.css';
import NavBar from './components/NavBar';
import Sneakers from './components/Sneakers';
import { useState } from "react";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const [cartNum, setCartNum] = useState(0);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [sneakers] = useState ([
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
  ]);

  function refreshCart() {
    let newSneakers = sneakers.filter((prod) => prod.amount > 0);
    setCartSneakers(newSneakers);
  }

 function addSneakers(title, id) {
  console.log("Dodat je proizvod: " + title);
  setCartNum(cartNum + 1);
  sneakers.forEach((prod) => {
    if (prod.id === id) {
      prod.amount++;
    }
    console.log(prod.amount);
  });
  refreshCart();
}

return (
  <BrowserRouter className="App">
    <NavBar cartNum={cartNum}></NavBar>
    <Routes>
      <Route
        path="/"
        element={<Sneakers sneakers={sneakers} onAdd={addSneakers} />}
      />
      <Route path="/cart" element={<Cart sneakers={cartSneakers} />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;