import React from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBJumbotron } from
"mdbreact";
import '../Style/Body.css'

function Body() {
    return (
        <div>
    <div className='bannerB'>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" className="bannerSize">
            <MDBView>
              <img
                className="w-100 img-fluid "
                src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_Joker/d13d18f4-aa95-4916-a891-dd1555ef4dd3._UR3000,600_SX1500_FMwebp_.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2"  className="bannerSize">
            <MDBView>
              <img
                className="w-100 img-fluid "
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_EnglishAlwaysOnWhatsNextV1/9739d884-08be-4ba2-8c8f-36f976d2127c._UR3000,600_SX1500_FMwebp_.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" className="bannerSize">
            <MDBView>
              <img
                className="w-100 img-fluid "
                src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_JackRyanLanguagesRevised1/52fa26d7-8020-4cc1-a0d0-21e3088423ea._UR3000,600_SX1500_FMwebp_.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
        </div>
    )
}

export default Body
