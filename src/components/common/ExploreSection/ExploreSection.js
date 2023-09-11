import React from 'react';
import './ExploreSection.css';
import ExploreCard from './ExploreCard/ExploreCard';

const ExploreSection = ({lists, collectionName}) => {


    return (
        <div className='max-width explore-section'>
            <div className='collection-title'>{collectionName}</div>
            <div className='explore-grid'>
                {
                    lists.map((list)=>{
                        return <ExploreCard list={list}/>
                    })
                }
            </div>
            
        </div>
    );
};

export default ExploreSection;