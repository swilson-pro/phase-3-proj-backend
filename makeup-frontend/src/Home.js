import React from "react"

function Home(){
    return(
        <main>
            <div className='filter-div'>
                <label htmlFor='brands'>Choose Brand:</label>
                <select name='brands' id='brands'>    
                </select>
                <label htmlFor='prodtypes'>Choose Product Type:</label>
                <select name='prodtypes' id='prodtypes'></select>
            </div>
        </main>
    )
}

export default Home;