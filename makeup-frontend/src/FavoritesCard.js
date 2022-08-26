import {useState} from 'react'

function FavoritesCard ({favorite, removeFavorite, id, url}) {

    const {brand, name, price, image_link, description} = favorite

    const handleRemoveFromFavorites = () => {
        fetch(`${url}favorites/${favorite.makeup_id}`, {
            method: "DELETE",
        })
        .then(resp=> resp.json())
        .then(data=>{
            removeFavorite(data.makeup_id)
            console.log(data)

        })
    }

    return (
        <li className='card'>
            <img src={image_link} alt={name} />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>Price: {price}</p>
            <button onClick={handleRemoveFromFavorites}>remove from favorites</button>
        </li>
    )
}

export default FavoritesCard