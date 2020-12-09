import React from 'react';
import Body from './Body';
import Footer from  './Footer/Footer';
import Header from './Header/Header';
import Faq from './Faq'
import Plan from './Plan'

const Home =()=>{
    return (
        <div>
            <Header/>
            <Body/>
            <Plan/>
            <Faq/>
            <Footer/>
         </div>       
    )
}

export default Home