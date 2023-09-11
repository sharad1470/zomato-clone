import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='max-width header'>
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt='logo'
            className='header-logo'
            />
            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                            <i className="fa-solid fa-location-dot absolute-center location-icon" ></i>
                            <div className='location-name'>Pune</div>
                        </div>
                        <i className="fa-solid fa-caret-down absolute-center"></i>
                    </div>

                    <div className='location-search-separator'></div>
                    <div className='header-searchBar'>
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        <input placeholder='search for restaurant, cuisine, dishes' className='search-input'/>
                    </div>
                    
                </div>
               
            </div>
        </div>
    );
};

export default Header;