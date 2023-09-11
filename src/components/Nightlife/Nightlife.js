import React from 'react';
import Collection from '../common/Collection/Collection';
import ExploreSection from '../common/ExploreSection/ExploreSection';
import { nightliferesdata } from '../../Data/nightliferes';
import Filters from '../common/Filters/Filters';

const collectionList=[
    {
        id:1,
        title:"trending this week",
        cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674839413.jpg",
        places:"14 Places"

    },
    {
        id:2,
        title:"16 best bars and pubs",
        cover:"https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg",
        places:"12 Places"

    },
    {
        id:3,
        title:"7 newly opened restaurants",
        cover:"https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg",
        places:"9 Places"

    },
    {
        id:4,
        title:"pure veg",
        cover:"https://b.zmtcdn.com/data/collections/8ea321c04135aacaac89eddb10ef64bd_1688552904.jpg",
        places:"11 Places"

    }
];
const nightlifeFilters=[
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

const nightlifeLists=nightliferesdata;

const Nightlife = () => {
    return (
        <div>
            <Collection lists={collectionList}/>
            <div className='max-width'>
            <Filters filters={nightlifeFilters}/>
            </div>
            <ExploreSection lists={nightlifeLists} collectionName={"Nightlife Restaurants in Pune"}/>
        </div>
    );
};

export default Nightlife;