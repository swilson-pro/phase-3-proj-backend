

function MakeupCard ({makeup, removeFavorite, newFavorite, url}) {
    const {id, brand, product_type, name, price, image_link, description, rating, category, company_id} = makeup
    const isNotFavorite = true


    const handleAddToFavorites = () => {
        fetch(`${url}favorites`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                makeup_id: id,
                company_id: 1
            }),
        })
        .then((res) => res.json())
        .then(newMakeup => newFavorite(newMakeup))
        .catch(function() {console.log('catch error')});
    }

    return (
        <li className='card'>
            <img src={image_link} alt={name} />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>Price: {price}</p>
            {isNotFavorite ? <button className="primary" onClick={handleAddToFavorites} >Add to Favorites</button> : <button>Remove from Favorites</button>}
            
        </li>
    )
}

export default MakeupCard