import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBContainer } from 'mdbreact';
export default function Plan() {
    return (
        <div>
            <MDBContainer>
            <h3 className='text-center mb-4 mt-5 font-weight-bold'>Choose Your Plan</h3>
          <MDBRow>
      <MDBCol md='4'>
      <MDBCard narrow>
          <MDBCardBody>
              <center>
            <MDBCardTitle className='font-weight-bold'>
              Video(No Ads)
            </MDBCardTitle>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>
            <MDBBtn color='cyan'>Select</MDBBtn></center>
          </MDBCardBody>
        </MDBCard>      </MDBCol>

      <MDBCol md='4'>
        <MDBCard narrow>
          <MDBCardBody>
              <center>
            <MDBCardTitle className='font-weight-bold'>
              Video
            </MDBCardTitle>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>
            <MDBBtn color='cyan'>Select</MDBBtn></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
      <MDBCard narrow>
          <MDBCardBody>
              <center>
            <MDBCardTitle className='font-weight-bold'>
              Video + Live TV
            </MDBCardTitle>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>
            <MDBBtn color='cyan'>Select</MDBBtn></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow> 
    </MDBContainer> 
        </div>
    )
}
