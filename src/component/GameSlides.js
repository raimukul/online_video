import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';

function GameSlides() {
    return (
        <div className='bg-dark p-5 mt-5'>
            <div  className='bg-cyan'>
            <h4 className='text-center text-white mb-4 ml-5 font-weight-bold'>Over 50 Sports Live & On-Demand</h4>
            </div>
          <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={false}
    showSides={true}
    sidesOpacity={.1}
    sideSize={.7}
    slidesToScroll={5}
    slidesToShow={5}
    scrollOnDevice={true}
  >
    <div>
      <img 
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/cricket.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/motor.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/rugby.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/afl.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/league.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/gridiron.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/basketball.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/mma.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/tennis.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://resources.kayosports.com.au/production/sport-logos/1x1/athletics.png'
        className='img-fuid w-50'
      />
    </div>
  </InfiniteCarousel>  
        </div>
    )
}

export default GameSlides
