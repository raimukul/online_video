import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link  } from 'react-router-dom'
const Footer = () => {
  return (
    <MDBFooter color="cyan" className="font-small pt-4 mt-4 instibuddy-bg4 ml-0">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="mb-4 font-weight-bold">
            Video-Your Choice, Our advice
            </h6>
            <p>
            A joint initiative taken by IIT Bombay students, professor and alumni
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="mb-4 font-weight-bold">Explore</h6>
            
            <p>
              <a rel="noopener noreferrer" href="https://www.iitm.ac.in/" target="_blank" >IIT Madras</a>
            </p>
            <p>
              <a rel="noopener noreferrer" href="http://www.iitb.ac.in/" target="_blank" >IIT Bombay</a>
            </p>
            <p>
              <a  rel="noopener noreferrer" href="http://www.iitr.ac.in/" target="_blank" >IIT Roorkee</a>
            </p>
            <p>
              <a rel="noopener noreferrer" href="https://www.nirfindia.org/2020/OverallRanking.html" target="_blank" >More..</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className=" mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a href="/faqs">FAQs</a>
            </p>
            <p>
              <Link to="#!">Offers & Discounts</Link>
            </p>
            <p>
              <a rel="noopener noreferrer" href="https://josaa.nic.in/WebInfo/Page/Page?PageId=1&LangId=P" target="_blank" >JoSAA</a>
            </p>
            <p>
            <Link to="/terms">Terms & conditions</Link>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Greater Noida, U.P., IN
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> video@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 91 9521421205
            </p>
            
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a rel="noopener noreferrer" href="https://www.instibuddy.in" target="_blank" > InstiBuddy.in </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a rel="noopener noreferrer" className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/instibuddyapp/" target="_blank" >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a rel="noopener noreferrer" className="btn-floating btn-sm rgba-white-slight mx-1" href="https://twitter.com/instibuddyapp/" target="_blank" >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a rel="noopener noreferrer" className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/instibuddyapp/" target="_blank" >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a rel="noopener noreferrer" className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.linkedin.com/company/instibuddyapp" target="_blank" >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;