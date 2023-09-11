import React from 'react';
import './Collection.css';
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';
import Slider from 'react-slick';

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<nextArrow/>,
    prevArrow: <PrevArrow/>
  };

const Collection = ({lists}) => {
    return (
        <div className='collection-wrapper'>
            <div className='collection max-width'>
                <div className='collection-title'>Collections</div>
                <div className='collection-subtitle-row'>
                    <div className='collection-subtitle-text'>
                        Explore curated lists of top restaurants, cafes, 
                        pubs, and bars in Pune, based on trends
                    </div>
                    <div className='collection-location'>
                       <div>All location in pune</div>
                       <i class="fa-solid fa-caret-right absolute-center"></i>
                    </div>
                </div>

                <Slider {...settings}>
                    {
                        lists.map((list)=>{
                            return(
                            <div>
                                <div className=' cur-po collection-cover'>
                                    <img src={list.cover} 
                                    alt={list.title}
                                    className='collection-image'
                                    />
                                    <div className='gradient-bg'></div>
                                    <div className='collection-card-title'>{list.title}</div>
                                <div className='collection-card-subtitle'>
                                    <div className=''>{list.places}</div>
                                    <i class="fa-solid fa-caret-right absolute-center collection-card-caret"></i>
                                </div>

                                </div>
                                
                                
                            </div>
                            );
                        })
                    }
                </Slider>

            </div>
        
        </div>
    );
};

export default Collection;