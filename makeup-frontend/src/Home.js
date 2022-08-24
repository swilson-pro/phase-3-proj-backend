import MakeupCard from './MakeupCard'

function Home({makeups}){
    return(
        <main>
            <div className='filter-div'>
                <label htmlFor='brands'>Choose Brand:</label>
                <select name='brands' id='brands'>    
                </select>
                <label htmlFor='prodtypes'>Choose Product Type:</label>
                <select name='prodtypes' id='prodtypes'></select>
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