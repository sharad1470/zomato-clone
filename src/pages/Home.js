import React, { useState } from 'react';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import TabOptions from '../components/common/TabOptions/TabOptions';
import { act } from 'react-dom/test-utils';
import Delivary from '../components/Delivary/Delivary';
import DiningOut from '../components/DiningOut/DiningOut';
import Nightlife from '../components/Nightlife/Nightlife';

const Home = () => {
    const[activeTab, setActiveTab]=useState("Delivary");

    

    return (
        <div>
            <Header/>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectScreen(activeTab)}
            <Footer/>
        </div>
    );
};


const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivary":
            return <Delivary/>
        case "DiningOut":
            return <DiningOut/>
        case "Nightlife":
            return <Nightlife/>
    }
}

export default Home;