

function MakeupCard ({makeup, removeFavorite, newFavorite, url, isNotFavorite, ifImageError}) {
    
    const {id, brand, product_type, name, price, image_link, description, rating, category, company_id} = makeup


    const handleAddToFavorites = (e) => {
        e.preventDefault()
        fetch(`${url}favorites`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                brand: brand,
                image_link: image_link,
                price: price,
                makeup_id: id,
                company_id: 1,
                description: description
            }),
        })
        .then((res) => res.json())
        .then(newMakeup => newFavorite(newMakeup))
        .catch(function() {console.log('catch error')});
    }

    const handleRemoveFromFavorites = () => {
        fetch(`${url}favorites/${id}`, {
            method: "DELETE",
        })
        removeFavorite(id)
    }

    return (
        <li className='card'>
            <img src={image_link} alt={name} onError={() => ifImageError(id,makeup)} />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>Price: {price}</p>
            {isNotFavorite ? <button className="primary" onClick={handleAddToFavorites} >Add to Favorites</button> : 
            <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>}
            
        </li>
    )
}

export default MakeupCard