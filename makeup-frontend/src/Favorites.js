import FavoritesCard from "./FavoritesCard"


function Favorites({favorites}) {
    console.log('favorites', favorites)
    return (
        <main>
            <ul className='cards'>
                {favorites.map((favorite) => {
                    return <FavoritesCard favorite={favorite}/>
                })}
            </ul>
        </main>
    )
}

export default Favorites