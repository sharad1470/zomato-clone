import React from 'react';
import './DelivaryItem.css';

const DelivaryItem = ({item}) => {
    return (
        <div>
        <div className='delivary-item-cover'>
            <img src={item.cover} className="delivary-item-image" alt={item.title}/>
            
        </div>
        <div className='delivary-item-title'>{item.title}</div>
        </div>
    );
};

export default DelivaryItem;