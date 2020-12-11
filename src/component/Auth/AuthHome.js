import React from 'react'
import Header from './HeaderAuth'
import Body from './Body'
import Footer from './Footer'
import Cricket from './Cricket'
import Egame from './Egaming'
import Football from './Football'

function AuthHome() {
    return (
        <div>
            <Header/>
            <Body/>
            <Egame/>
            <Cricket/>
            <Football/>
            <Footer/>
        </div>
    )
}

export default AuthHome
