import React from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";




 const  Header= () => {
    return (
        <div>
         
      <MDBNavbar color="cyan" dark expand="md">
        <MDBNavbarBrand className='ml-5'>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler 
        //  onClick={this.toggleCollapse} 
         />
        <MDBCollapse id="navbarCollapse3"  
        // isOpen={this.state.isOpen} 
        navbar>
          <MDBNavbarNav left>
          
          </MDBNavbarNav>
          <MDBNavbarNav right className='mr-5'>
            <MDBNavItem>
            <MDBNavLink to="#!">Sign in</MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

        </div>
    )
}

export default Header;