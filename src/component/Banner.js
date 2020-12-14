import React, { Fragment } from 'react';
import './Style/Body.css';
import { MDBBtn } from "mdbreact";

export default function Banner() {
    return (
        <div className='mt-5 container'>
            <Fragment>
            <div className="bg">
                <div className='middle'>
                  <h3 className='text-white text-center mt-5'><samp>Watch thousands of shows and movies, with plans starting <br></br>at $5.99/month.</samp></h3>
                    <center>
                       <MDBBtn rounded color="cyan">Sign Up</MDBBtn>
                    </center>
                </div>
            </div>
            </Fragment>
        </div>
    )
}
