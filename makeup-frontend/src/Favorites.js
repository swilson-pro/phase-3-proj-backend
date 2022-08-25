import FavoritesCard from "./FavoritesCard"
import {useState} from 'react'


function Favorites({favorites, removeFavorite, url}) {

    
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
                    />
                })}
            </ul>
        </main>
    )
}

export default Favorites