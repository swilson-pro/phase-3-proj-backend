

function FavoritesCard ({favorite}) {

    const {brand, name, price, image_link, description} = favorite
    return (
        <li className='card'>
            <img src={image_link} alt={name} />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>Price: {price}</p>
            
        </li>
    )
}

export default FavoritesCard