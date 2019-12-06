import React, {useState} from 'react';
import {Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { Link } from "react-router-dom";


function MainNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
    return (
        
          <Navbar color="info" dark expand="md">
            <Link className="navbar-brand" to="/">reactstrap</Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link to={'/'} className="nav-link">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to={'/all-contacts'} className="nav-link"> All Contacts </Link>
                </NavItem>
                <NavItem>
                  <Link to={'/add-contacts'} className="nav-link"> Add Contacts </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>

                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                  
                </UncontrolledDropdown>

              </Nav>
              <p className="text-light mt-2" >Simple Text</p>
            </Collapse>
          </Navbar>
      
    )
}

export default MainNavbar;
