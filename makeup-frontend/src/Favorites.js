import FavoritesCard from "./FavoritesCard"


function Favorites({favorites, removeFavorite, url}) {
    // console.log('favorites', favorites)
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