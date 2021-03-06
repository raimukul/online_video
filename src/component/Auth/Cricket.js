import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';

function Cricket() {
    return (
        <div className='bg-dark p-5'>
            <div  className='bg-cyan'>
            <h4 className='text-left text-white mb-4 ml-5 font-weight-bold'>Cricket on-Demand</h4>
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

export default Cricket
