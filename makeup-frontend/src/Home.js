import MakeupCard from './MakeupCard'
import Search from './Search'
import {v4 as uuidv4} from 'uuid'

function Home({makeups, companies, productTypes, updateBrand, brand, updateProdType, prodType, searchTerm, setSearchTerm, removeFavorite, newFavorite, url, favorites, ifImageError}){
    return(
        <main>
            <br></br>
            <div className='filter'>
            <div className='filter-div'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <label htmlFor='brands'>Choose Brand:&nbsp;&nbsp;</label>
                <select className="choosebox" name='brands' id='brands' onChange={updateBrand} value={brand}>
                    <option value="">All</option>
                    {companies.map((company) => {
                        return <option value={company}>{company}</option>
                    })}    
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor='prodtypes'>Choose Product Type:&nbsp;&nbsp;</label>
                <select className="choosebox" name='prodtypes' id='prodtypes' onChange={updateProdType} value={prodType}>
                    <option value="">All</option>
                    {productTypes.map((productType) => {
                        return <option value={productType}>{productType}</option>
                    })}
                </select>
            </div>
            
            <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <br></br>
            <br></br>
            <br></br>
            </div>
            <hr></hr>
            <br></br>
            <br></br>

            <ul className='cards'>
                {makeups.map((makeup) => {
                    return <MakeupCard 
                    key={uuidv4()}
                    isNotFavorite={favorites.every((item) => {return item.makeup_id !== makeup.id})}
                    removeFavorite={removeFavorite}
                    newFavorite={newFavorite}
                    ifImageError={ifImageError}
                    makeup={makeup}
                    url={url}/>
                })}
            </ul>
        </main>
    )
}

export default Home;