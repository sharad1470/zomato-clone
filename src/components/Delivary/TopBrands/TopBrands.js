import React from 'react';
import './TopBrands.css';
import NextArrow from '../../common/carousel/NextArrow';
import PrevArrow from '../../common/carousel/PrevArrow';
import Slider from 'react-slick';

const topBrandsList=[
    {
        id:1,
        time:'31 min',
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png"
    },
    {
        id:2,
        time:'48 min',
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png"
    },
    {
        id:3,
        time:'33 min',
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png"
    },
    {
        id:4,
        time:'34 min',
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id:5,
        time:'24 min',
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png"
    },
    {
        id:6,
        time:'29 min',
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/82b5b6321860545a160e790d99ec6da3_1629438503.png"
    },
    {
        id:7,
        time:'32 min',
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7c048d2ec413aaca136a33c3e9628c0e_1629952759.png"
    },
    {
        id:8,
        time:'33 min',
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png"
    }
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow/> ,
    prevArrow: <PrevArrow/>
  };


const TopBrands = () => {
    return (
        <div className='max-width top-brands'>
            <div className='collecton-title'>Top brands for you</div>
            <Slider {...settings}>
                    {
                        topBrandsList.map((brand)=>{
                            return(
                                <div>
                                    <div className='top-brands-cover'>
                                        
                                            <img className='top-brands-image'
                                            src={brand.cover} alt=""/>
                                        

                                    </div>
                                    <div className='top-brand-time'>{brand.time}</div>
                                </div>
                            );
                        })
                    }
                </Slider>
            
        </div>
    );
};

export default TopBrands;