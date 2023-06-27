import { useState } from "react"

const Search = ({search, onSearch}) => {
 

    const handleChange = (e) => {
        onSearch(e)
    }
    
    return(
        <>
        <label htmlFor="search">Write</label>
        <input type={"text"} 
        onChange={handleChange} 
        id="search"
        value={search}
        />
        </>
    )
}

export default Search