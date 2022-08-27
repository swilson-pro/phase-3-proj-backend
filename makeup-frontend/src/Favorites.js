import FavoritesCard from "./FavoritesCard"
import {useState} from 'react'


function Favorites({favorites, removeFavorite, url, ifImageErrorFave}) {

    
    return (
        <main>
            <ul className='cards'>
                {favorites.map((favorite) => {
                    return <FavoritesCard 
                    key={favorite.fave_id}
                    id={favorite.fave_id}
                    removeFavorite={removeFavorite}
                    favorite={favorite}
                    url={url}
                    ifImageErrorFave={ifImageErrorFave}
                    />
                })}
            </ul>
        </main>
    )
}

export default Favorites