import React from 'react';
import Body from './Body';
import Footer from  './Footer/Footer';
import Header from './Header/Header';
import Faq from './Faq';
import Plan from './Plan';
import Banner from './Banner';
import GameSlides from './GameSlides'

const Home =()=>{
    return (
        <div>
            <Header/>
            <Body/>
            <Plan/>
            <Banner/>
            <GameSlides/>
            <Faq/>
            <Footer/>
         </div>       
    )
}

export default Home