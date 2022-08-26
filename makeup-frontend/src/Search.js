function Search({searchTerm, setSearchTerm}) {
   
    return (
        <div className='searchbar'>
            <label htmlFor='search'>Search Product by Keyword:</label>
            <input class='searchbox'
            type='text' 
            id='search'
            placeholder='type in here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Search