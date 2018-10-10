import React from 'react';

const MenuItem = ({ item }) => {
    return (
        <li className='menu-item'>
            <p>{item.tagline}</p>
            <a href={item.url} className='menu-item-link'>{item.name}</a>
        </li>
    );
};

export default MenuItem;
