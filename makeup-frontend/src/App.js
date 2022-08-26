import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar";
import React, { useState, useEffect, useRef } from 'react';
import Home from './Home';
import Favorites from './Favorites';
import MyProducts from './MyProducts';
import NewProductForm from './NewProductForm';

const url = 'http://localhost:3200/'


function App() {
  const form = useRef()
  const [makeups, setMakeups] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [brand, setBrand] = useState('maybelline');
  const [prodType, setProdType] = useState('lipstick')
  const [searchTerm, setSearchTerm] = useState('')
  const [displayedList, setDisplayedList] = useState([])
  const [myProductsList, setMyProductsList] = useState([])
  


  const fetchMakeups = async(brand, prodType) => {

    const checkBrand = () => {
      return brand ? `&brand=${brand}` : ""
    }

    const checkProdType = () => {
      return prodType ? `&product_type=${prodType}` : ""
    }

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

    const response = await fetch(`${url}/favorites`);
    const favoritesArray = await response.json();

    setFavorites(favoritesArray)
  }

  useEffect(() => {
    fetchMakeups(brand, prodType)
    fetchFavoritesList()
    fetchBrands()
    fetchProductTypes()
  }, [brand, prodType])
  


  const newDisplayedList = makeups.filter(makeup => {
    return makeup.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  function updateBrand(e) {
    setBrand(e.target.value)
  }

  function updateProdType(e) {
    setProdType(e.target.value)
  }


  // const newProduct = (newProd) => {
  //   const makeupsArray = [...makeupsArray, newProd]
  //   setMakeups(makeupsArray)
  // }

  const newProduct = (newProd) => {
    const updatedProductsArray = [...myProductsList, newProd]
    setMyProductsList(updatedProductsArray)
  }

  const deleteProduct = (id) => {
    console.log('delete this product:', id)
    const newlyUpdatedProductsArray = myProductsList.filter((item) => item.id !== id);
    setMyProductsList(newlyUpdatedProductsArray)
  }

  // const fetchNewProducts = async() => {
  //   const response = await fetch(`${url}/my_products`);
  //   const myProductTypesArray = await response.json();
  //   setMakeups(myProductTypesArray)
  // }

  // const prodListResponse = await fetch('http://localhost:3200/makeups')
  // const myProductsListArray = await prodListResponse.json()
  // setMyProductsList(myProductsListArray)
  // const filteredplist = myProductsListArray.filter((makeup) => {
  //     if (brand && makeup.brand !== brand) {
  //       return false
  //     }
  //     if (prodType && makeup.prodType !== prodType) {
  //       return false
  //     } else return true
  // })

  console.log("makeups", makeups)
  console.log("companies", companies)
  console.log("productTypes", productTypes)
  console.log('favorites', favorites)

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fave) => fave.makeup_id != id);
    console.log('updatedFavorites', updatedFavorites)
    console.log('FAVORITE REMOVED: ID', id)
    setFavorites(updatedFavorites)
  }

  const newFavorite = (newFave) => {
    const updatedFavoritesArray = [...favorites, newFave]
    setFavorites(updatedFavoritesArray)
  }

  // login
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(form.current)
    let req = await fetch('http://localhost:3200/login', {
      method: 'POST',
      body: data
    })
    let res = await req.json()
    if (req.ok) {
      console.log('Company', res)
      alert('You have logged in')
    } else {
      alert('Invalid email/password')
    }
  }
  const [name, setName] = useState('')

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    let req = await fetch('http://localhost:3200/forgot_password', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: name})
    })
    if (req.ok) {
      let res = await req.json()
      let securityQuestion = window.confirm("Check your company name and try again")
      if (securityQuestion) {
        alert(`Your password is: ${res.password}`)
      } else {
        alert("Try again.")
      }
    }
// end login



  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/favorites' element={<Favorites favorites={favorites} removeFavorite={removeFavorite} url={url}/>}/>
        <Route path='/myproducts' element={<MyProducts deleteProduct={deleteProduct} makeupList={myProductsList} />}/>
        <Route path='/newproductform' element={<NewProductForm newProduct={newProduct}/>}/>
        <Route path='/' element={<Home makeups={newDisplayedList} companies={companies} productTypes={productTypes} updateBrand={updateBrand} brand={brand} updateProdType={updateProdType} prodType={prodType} searchTerm={searchTerm} setSearchTerm={setSearchTerm} removeFavorite={removeFavorite} newFavorite={newFavorite} url={url} favorites={favorites}/>} />
      </Routes>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit} ref={form}>
        <input name="Company Name" type="email" placeholder='Company Name' /><br />
        <input name="password" type="password" placeholder='Password' /><br />
        <input type="submit" />
      </form>
      <h2>Forgot your password?</h2>
      <p>
        Fill out the form below and complete the security questions
        to recover your account!
      </p>
      <form onSubmit={handleForgotPassword}>
        <input type="Company Name" placeholder='Enter your Company Name' onChange={(e) => { setName(e.target.value) }} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
