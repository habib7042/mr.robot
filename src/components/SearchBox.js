import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa1'>
            <input className = 'pa2 ba b--green bg-lightest-blue'
            type = 'search' 
            placeholder = 'Robot Name' 
            onChange = {searchChange} />
        </div>
    );
}

export default SearchBox;