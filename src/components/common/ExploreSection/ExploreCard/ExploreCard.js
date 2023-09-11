import React from 'react';
import './ExploreCard.css';

const ExploreCard = ({list}) => {

   // console.log(list);
    const name=list?.info?.name ?? "";
    const coverImg=list?.info?.image?.url;
    const delivaryTime= list?.order?.deliveryTime;
    const rating=list?.info?.rating?.rating_text;
    const approxPrice=list?.info?.cfo?.text;
    const offers=list?.bulkOffers ?? [];
    const cuisines=list?.info?.cuisine.map((item)=>item.name)
                    .slice(0,3);

    const bottomContainers=list?.bottomContainers;
    const goldOff=list?.gold?.text;
    const proOff=offers.length>1
    ?offers[0].text
    :null;

    const discount=offers.length>1
    ?offers[1].text
    :offers.length===1
    ?offers[0].text
    :null;

    console.log(rating);
    return (
        <div className='explore-card cur-po'>
            <div className='explore-card-cover'>
                <img src={coverImg}className='explore-card-image' alt={name}/>
                <div className='delivary-time'>{delivaryTime}</div>
                {proOff && <div className='Pro-off'>{proOff}</div>}
                {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
                {discount && <div className='discount absolute-center'>{discount}</div>}
            </div>
            <div className='res-row'>
                <div className='res-name'>{name}</div>
                <div className='res-rating absolute-center'>
                    {rating}<i class="fa-regular fa-star absolute-center"></i>
                </div>
            </div>

            <div className='res-row'>
                {cuisines.length && (<div className='res-cuisine'>
                    
                   { cuisines.map((item,i)=>{
                        return (<span className='res-cuisine-tag'>
                            {item}{i!==cuisines.length-1 && ","}
                        </span>
                        );
                    })}

                   
                </div>
                )}
                
                {approxPrice && <div className='res-price'>{approxPrice}</div>}
            </div>
                {bottomContainers.length && <div>
                    <div className='card-separator'></div>
                    <div className='explore-bottom'>
                    <img 
                        src={bottomContainers[0]?.image?.url}
                        alt={bottomContainers[0]?.text}
                        style={{height:'18px'}}
                    />
                    <div className='res-bottom-text'>{bottomContainers[0]?.text}</div>
                    </div>
            </div>}

            
        </div>
    );
};

export default ExploreCard;