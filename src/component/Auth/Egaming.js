import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';

function Egaming() {
    return (
        <div className='bg-dark p-5'>
            <div  className='bg-cyan'>
            <h4 className='text-left text-white mb-4 ml-5 font-weight-bold'>e-Gaming</h4>
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
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/140x100'
      />
    </div>
  </InfiniteCarousel>  
        </div>
    )
}

export default Egaming
