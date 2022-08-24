
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar"
import React, { useState, useEffect } from 'react'
import Home from './Home'
import Favorites from './Favorites'

const url = 'http://localhost:3200/'


function App() {
  const [makeups, setMakeups] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  

  const fetchMakeups = async() => {
    const response = await fetch(url);
    const makeupsArray = await response.json();
    setMakeups(makeupsArray);
  }

  const fetchBrands = async() => {
    let companyNames = []
    const response = await fetch(`${url}/companies`);
    const companiesArray = await response.json();
    companiesArray.forEach((company) => companyNames.push(company.name))
    setCompanies(companyNames);
  }

  const fetchProductTypes = async() => {
    const response = await fetch(`${url}/show_product_types`);
    const productTypesArray = await response.json();
    setProductTypes(productTypesArray)
  }

  useEffect(() => {
    fetchMakeups()
    fetchBrands()
    fetchProductTypes()
  }, [])

  console.log("makeups", makeups)
  console.log("companies", companies)
  console.log("productTypes", productTypes)

  return (
    <div className="App">
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
        <Route path='/' element={<Home makeups={makeups} companies={companies} productTypes={productTypes}/>} />
      </Routes>

    </div>
  );
}

export default App;
