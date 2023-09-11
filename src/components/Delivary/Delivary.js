import React from 'react';
import Filters from '../common/Filters/Filters';
import DelivaryCollection from './DelivaryCollection';

const delivaryFilters=[
    {
        id:1,
        title:"Filters",
        icon:<i class="fa-solid fa-sliders absolute-center"></i>
    },
    {
        id:2,
        title:"Rating: 4.0+"
    },
    {
        id:3,
        title:"safe and hygenic"
    },
    {
        id:4,
        title:"Pure veg"
    },
    {
        id:5,
        title:"Delivary time"
    },
    {
        id:6,
        title:"Great Offers",
        icon:<i class="fa-duotone fa-grid-2-plus absolute-center"></i>
    }

];
const Delivary = () => {
    return (
        <div>
            <div className='max-width'>
                <Filters filters={delivaryFilters}/>
            </div>
            <DelivaryCollection/>
        </div>
    );
};

export default Delivary;