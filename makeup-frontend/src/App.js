
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar"
import React, { useState, useEffect } from 'react'
import Home from './Home'
import Favorites from './Favorites'
import MyProducts from './MyProducts';
import NewProductForm from './NewProductForm';

const url = 'http://localhost:3200/'


function App() {
  const [makeups, setMakeups] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [brand, setBrand] = useState('maybelline');
  const [prodType, setProdType] = useState('lipstick')
  


  const fetchMakeups = async(brand, prodType) => {

    const checkBrand = () => {
      return brand ? `&brand=${brand}` : ""
    }

    const checkProdType = () => {
      return prodType ? `&product_type=${prodType}` : ""
    }

    console.log('checkProdType()', checkProdType())
    const response = await fetch(`${url}makeups?&${checkBrand()}&${checkProdType()}`)
    // const response = await fetch(`${url}makeups?${checkBrand()}${checkProdType()}`);
    
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

  const fetchFavoritesList = async () => {
    let favoriteList = []
    const response = await fetch(`${url}/favorites`);
    const favoritesArray = await response.json();
    favoritesArray.forEach((favorite) => favoriteList.push(favorite))
    setFavorites(favoriteList)
  }

  useEffect(() => {
    fetchMakeups(brand, prodType)
    fetchFavoritesList()
    fetchBrands()
    fetchProductTypes()
  }, [brand, prodType])

  function updateBrand(e) {
    setBrand(e.target.value)
  }

  function updateProdType(e) {
    setProdType(e.target.value)
  }

  console.log("makeups", makeups)
  console.log("companies", companies)
  console.log("productTypes", productTypes)
  // console.log('favorites', favorites)

  return (
    <div className="App">
      <NavBar />
      <Routes>
         <Route path='/favorites' element={<Favorites favorites={favorites}/>}/>
         <Route path='/myproducts' element={<MyProducts />}/>
         <Route path='/newproductform' element={<NewProductForm />}/>
        <Route path='/' element={<Home makeups={makeups} companies={companies} productTypes={productTypes} updateBrand={updateBrand} brand={brand} updateProdType={updateProdType} prodType={prodType}/>} />
      </Routes>

    </div>
  );
}

export default App;
