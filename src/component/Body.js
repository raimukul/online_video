import React, { Fragment } from 'react';
import './Style/Body.css';
import { MDBBtn } from "mdbreact";

export default function Banner() {
    return (
        <div>
            <Fragment>
            <div className="bg">
                <div className='middle'>
                  <h1 className='text-white text-center font-weight-bold'><samp>Welcome to Online Video</samp></h1>
                  <h3 className='text-white text-center'><samp>Watch thousands of shows and movies, with plans starting <br></br>at $5.99/month.</samp></h3>
                    <center>
                       <MDBBtn rounded color="cyan"><samp>Sign Up</samp></MDBBtn>
                    </center>
                </div>
            </div>
            </Fragment>
        </div>
    )
}
