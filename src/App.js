import "./App.css";
import { useState } from "react";
import LegoData from "./LegoData.json";
import LegoItem from "./LegoItem.js";
import CartItem from "./CartItem.js";
import logo from './lego.png';


import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function App() {
  //===================================
  const radioTheme = {'&.Mui-checked': {color: "#de5040"}, marginLeft: "2vw"};
  const legoInfo = [];
  LegoData.forEach((lego) => {legoInfo.push({
    "id": lego.id,
    "Name": lego.Name,
    "rating": lego.rating,
    "price": lego.price,
    "pieces": lego.pieces,
    "age": lego.age,
    "minifigures": lego.minifigures,
    "model_type": lego.model_type,
    "available": lego.available,
    "type": lego.type,
    "image": lego.image
    })});
  legoInfo.sort((a,b) => (b.rating - a.rating))

  //===================================
  const [art, setArt] = useState(true);
  const [music, setMusic] = useState(true);
  const [plant, setPlant] = useState(true);
  const [replica, setReplica] = useState(true);
  const [vehicle, setVehicle] = useState(true);
  const [soccer, setSoccer] = useState(true);
  const [game, setGame] = useState(true);
  const [building, setBuilding] = useState(true);
  const [space, setSpace] = useState(true);
  const [StarWars, setStarWars] = useState(true);

  const [available, setAvailable] = useState(true);
  const [outOfStock, setoutOfStock] = useState(true);

  const [HardToFind, setHardToFind] = useState(true);
  const [exclusive, setExclusive] = useState(true);
  const [normal, setNormal] = useState(true);

  const [sortLego, setSortLego] = useState(legoInfo);
  const [sortBy, setSortBy] = useState('rating');
  
  const [cart, setCart] = useState({items: {}, price: 0}); 

  //===================================
  const modelCheck = {
    "Art": [art, setArt], 
    "Music": [music, setMusic],
    "Plants": [plant, setPlant],
    "Replica": [replica, setReplica],
    "Vehicle": [vehicle, setVehicle],
    "Soccer": [soccer, setSoccer],
    "Game": [game, setGame],
    "Building": [building, setBuilding],
    "Space": [space, setSpace],
    "Star Wars": [StarWars, setStarWars],
  };

  const typeCheck = {
    "Easy To Find": [normal, setNormal],
    "Hard To Find": [HardToFind, setHardToFind],
    "Exclusive":[exclusive, setExclusive]

  };

  const availableCheck = {
    "Available": [available, setAvailable],
    "Out Of Stock": [outOfStock, setoutOfStock],
  };

  //===================================

  const updateCart = (id) => {
    let item = LegoData[id];
    let name = item.Name; 
    let updatedCart = cart.items; 
    
    if (updatedCart[name]) {
      updatedCart[name] += 1
    } 
    else {
      updatedCart[name] = 1
    }
    setCart({items: updatedCart, price: cart.price + item.price})
  }

  function getProp(prop, name) {
    let val = null;
    for (const lego of legoInfo) {
      if (lego.Name == name) {
        val = lego[prop];
      }
    }
    return val;
  }

  function addItem(name) {
    cart.items[name] += 1
    let itemPrice = null;
    for (const lego of legoInfo) {
      if (lego.Name == name) {
        itemPrice = lego.price;
        break;
      }
    }
    setCart({items: cart.items, price: cart.price + itemPrice})
  }

  function removeItem(name) {
    if (cart.items[name] > 0) {
      cart.items[name] -= 1
      let itemPrice = null
      for (const lego of legoInfo) {
        if (lego.Name == name) {
          itemPrice = lego.price
          break;
        }
      }
      setCart({items: cart.items, price: cart.price - itemPrice})
    }

    if (cart.items[name] == 0){
        delete cart.items[name]
    }
  }

  //===================================
  const filterChanger = (event, newValue) => {
    setSortBy(newValue);
    let toSort = [... sortLego];
    let type = String(newValue);
    if (type=='price' || type=="age"){
      toSort.sort(function(a, b) {return a[type] - b[type];});
    }
    else if (type=='rating' || type=="pieces" || type=="minifigures") { 
      toSort.sort(function(a, b) {return b[type] - a[type];});
    } 
    else {
      toSort.sort((a,b) => a.Name.localeCompare(b.Name));
    }
    setSortLego(toSort);
  };

  //===================================
  function resetFilters() {
    Object.keys(modelCheck).map(category => modelCheck[category][1](true));
    Object.keys(typeCheck).map(category => typeCheck[category][1](true));
    Object.keys(availableCheck).map(category => availableCheck[category][1](true));
    filterChanger(null, "rating");
  }

  function clearCart() {
    setCart({items: {}, price: 0});
  }

  return (
    <div class="App">
      <div class="header">
        <img class = "head_img" src={logo}/> 
      </div>
      <div class="root">
        <div class="filter">
          <div class="filter_text">
            <h3>Sort By:</h3>
          </div>
          <div>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="rating"
                name="radio-buttons-group"
                onChange={filterChanger}
                value={sortBy}>
                <FormControlLabel value='rating' control={<Radio sx={radioTheme} />} label="Rating" />
                <FormControlLabel value='price' control={<Radio sx={radioTheme}/>} label="Price" />
                <FormControlLabel value='minifigures' control={<Radio sx={radioTheme} />} label="Minifigures" />
                <FormControlLabel value='pieces' control={<Radio sx={radioTheme} />} label="Pieces" />
                <FormControlLabel value='age' control={<Radio sx={radioTheme} />} label="Age" />
                <FormControlLabel value='name' control={<Radio sx={radioTheme} />} label="Name" />
              </RadioGroup>
            </FormControl>
          </div>

          <div class="filter_text">
            <h3>Model Type Filter:</h3>
          </div>
          <div>
            <FormGroup>
              {Object.keys(modelCheck).map(model_type =>
              <FormControlLabel onChange={(event, value) => modelCheck[model_type][1](value)} 
              control={<Checkbox checked={modelCheck[model_type][0]} sx={radioTheme}/>} label={model_type} />)}
            </FormGroup> 
          </div> 
          <div class="filter_text">
            <h3>Available Filter:</h3>
          </div>
          <div>
            <FormGroup>
              {Object.keys(availableCheck).map(available =>
              <FormControlLabel onChange={(event, value) => availableCheck[available][1](value)} 
              control={<Checkbox checked={availableCheck[available][0]} sx={radioTheme}/>} label={available} />)}
            </FormGroup> 
          </div>
          <div class="filter_text">
            <h3>Type Filter:</h3>
          </div>
          <div>
            <FormGroup>
              {Object.keys(typeCheck).map(type =>
              <FormControlLabel onChange={(event, value) => typeCheck[type][1](value)} 
              control={<Checkbox checked={typeCheck[type][0]} sx={radioTheme}/>} label={type} />)}
            </FormGroup> 
          </div>
          <button class = "clear_button filter_text" onClick={() => resetFilters()}>Reset All Filters</button>
        </div>
        <div class="items"> 
            {sortLego.map(item => (modelCheck[item.model_type][0] && availableCheck[item.available][0] && typeCheck[item.type][0])?
            <LegoItem item={item} updateCart={updateCart}></LegoItem>: <></>
            )}
        </div>
        <div class="cart">
          <div class="cart_text">
            <h2>Cart</h2>
          </div>
          {Object.keys(cart.items).map(name => <CartItem name={name} count={cart.items[name]} img={getProp("image", name)} price={getProp("price", name)} addItem={addItem} removeItem={removeItem}> </CartItem>)}
          <div class="cart_text">
            <h3>Total: ${Math.round(cart.price * 100) / 100}</h3>
          </div>
          <div class = "button_div">
            <button class = "clear_button" onClick={() => clearCart()}>Clear Cart</button>
            <button class = "button">Checkout</button>
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
