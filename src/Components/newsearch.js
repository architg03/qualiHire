import React from 'react'

function SearchBar({placeholder, db}) {
    return (
        <div className = "search">
            <div className = "searchInputs">
            <input type = "text"
            <div className = "SearchIcon"></div>
            </div>
            <div className = "dataResult"></div>
        </div>
    )
}

export default SearchBar