import React from 'react';

const Card = ({name, email, id, phone, website}) => {
    return(
        <div className='card'>
            <img src={`https://robohash.org/${id}?200x200`} alt="Robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
            </div>
        </div>
    );
}
export default Card;