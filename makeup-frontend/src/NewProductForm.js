import React, {useState} from "react";

function NewProductForm({newProduct}) {
    const [brand, setBrand] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)
    // const [category, setCategory] = useState('')
    const [productType, setProductType] = useState('')
    

  
    console.log({image, name, productType, brand, price, description, rating})
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch('http://localhost:3200/makeups', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          image_link: image,
          name: name,
          product_type: productType,
          brand: brand,
          price: price,
          description: description,
          rating: rating
        //   category: category,
        //   company_id: company_id
        })
      })
      .then(r => r.json())
      .then(newMakeup => newProduct(newMakeup));
    }
  
    return ( 
    <div>
      <br></br>
      <br></br>
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
         />
        <input 
        type="text"
        name="name"
        placeholder="Name of Product"
        value={name}
        onChange={(e) => setName(e.target.value)}
         />
        <input 
        type="text"
        name="prodtype"
        placeholder="Product Type"
        value={productType}
        onChange={(e) => setProductType(e.target.value)}
         />
        <input 
        type="number"
        name="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
         />
        <input 
        type="text"
        name="brand"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
         />
         <input 
        type="text"
        name="Rating"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
         />
         {/* <input 
        type="text"
        name="Category"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
         /> */}
  
        {/* <textarea cols='200' rows='10' value={description} onChange={(e) => setDescription(e.target.value)} /> */}
        <br/>
        <br></br>
        <button type="submit">Add a Product</button>
      </form>
    </div>
    )
  }

export default NewProductForm