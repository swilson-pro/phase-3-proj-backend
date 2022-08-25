import MakeupCard from './MakeupCard'

function Home({makeups, companies, productTypes, updateBrand, brand, updateProdType, prodType}){
    return(
        <main>
            <div className='filter-div'>
                <label htmlFor='brands'>Choose Brand:</label>
                <select name='brands' id='brands' onChange={updateBrand} value={brand}>
                    {companies.map((company) => {
                        return <option value={company}>{company}</option>
                    })}    
                </select>

                <label htmlFor='prodtypes'>Choose Product Type:</label>
                <select name='prodtypes' id='prodtypes' onChange={updateProdType} value={prodType}>
                    {productTypes.map((productType) => {
                        return <option value={productType}>{productType}</option>
                    })}
                </select>
            </div>
            <ul className='cards'>
                {makeups.map((makeup) => {
                    return <MakeupCard makeup={makeup}/>
                })}
            </ul>
        </main>
    )
}

export default Home;