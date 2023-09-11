import React from 'react';
import './Filters.css';
import FilterItem from './FilterItem';

const Filters = ({filters}) => {
    
    return (
        <div className='filters'>
            {
                filters.map((filter)=>{
                    return <FilterItem filter={filter}/>
                })
            }
            
        </div>
    );
};

export default Filters;