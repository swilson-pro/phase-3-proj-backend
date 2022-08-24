function MakeupCard ({makeup}) {
    const {id, brand, product_type, name, price, image_link, description} = makeup

    return (
        <li className='card'>
            <img src={image_link} alt={name} />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>Price: {price}</p>
        </li>
    )
}

export default MakeupCard