import React from 'react';
import NextArrow from '../common/carousel/NextArrow';
import PrevArrow from '../common/carousel/PrevArrow';
import Slider from 'react-slick';
import DelivaryItem from './DelivaryItem/DelivaryItem';
import TopBrands from '../Delivary/TopBrands/TopBrands';
import './DelivaryCollection.css';
import ExploreSection from '../common/ExploreSection/ExploreSection';
import { restaurants} from '../../Data/restaurants'

const delivaryCollection=[
    {
        id:1,
        title:"pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:3,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:4,
        title:"Sandwich",
        cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },
    {
        id:5,
        title:"cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id:6,
        title:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:7,
        title:"NorthIndian",
        cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
        id:8,
        title:"NorthIndian",
        cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"

    }

];

const restaurantList=restaurants;
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/> ,
    prevArrow: <PrevArrow/>
  };

const DelivaryCollection = () => {
    return (
        <div className='delivary-collection'>
            <div className='max-width'>
                <div className='collection-title'>Eat what makes u happy</div>
                <Slider {...settings}>
                    {
                        delivaryCollection.map((item)=>{
                            return <DelivaryItem item={item}/>
                        })
                    }
                </Slider>
                
            </div>
            <TopBrands/>
            <ExploreSection lists={restaurantList} collectionName="Delivary retaurants in pune"/>
        </div>
    );
};

export default DelivaryCollection;

