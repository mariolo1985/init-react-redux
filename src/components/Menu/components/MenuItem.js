import React from 'react';
import PropTypes from 'prop-types';


const MenuItem = ({ item }) => (
    <li className='menu-item'>
        <p>{item.tagline}</p>
        <a href={item.url} className='menu-item-link'>{item.name}</a>
    </li>
);

MenuItem.propTypes = {
    item: PropTypes.shape({})
};

MenuItem.defaultProps = {
    item: {}
};

export default MenuItem;
