
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar"
import React, { useState, useEffect } from 'react'
import Home from './Home'
import Favorites from './Favorites'

const url = 'http://localhost:3200/'

function App() {
  const [makeups, setMakeups] = useState([]);

  const fetchMakeups = async() => {
    const response = await fetch(url);
    const makeupsArray = await response.json();
    setMakeups(makeupsArray);
  }

  useEffect(() => {
    fetchMakeups()
  }, [])

  console.log(makeups)

  return (
    <div className="App">
      {console.log("is this working?")}
      <NavBar />
      <Routes>
         <Route path='/favorites' element={<Favorites />}/>
        {/*<Route path='/savedproducts'>
          <Savedproducts />
        </Route>
        <Route path='/myproducts'>
          <MyProducts />
        </Route>
        <Route path='/newproductform'>
          <NewProductForm />
        </Route> */}
        <Route path='/' element={<Home makeups={makeups}/>} />
      </Routes>

    </div>
  );
}

export default App;
