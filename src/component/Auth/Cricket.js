import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';

function Cricket() {
    return (
        <div className='bg-secondary p-5'>
            <div  className='bg-secondary'>
            <h4 className='text-left mb-4 ml-5 font-weight-bold'>Cricket on-Demand</h4>
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
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/150'
      />
    </div>
  </InfiniteCarousel>  
        </div>
    )
}

export default Cricket
