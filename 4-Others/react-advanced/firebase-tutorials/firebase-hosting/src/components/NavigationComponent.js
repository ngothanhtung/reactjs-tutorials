import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar style={{ paddingLeft: 0 }} light expand="md">
        <NavbarBrand href="/">
          <img style={{ width: 32 }} src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" />
          <span style={{ paddingLeft: 6, paddingBottom: 0, fontSize: 18, fontWeight: '700' }}>Firebase</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" style={{ textDecoration: 'none' }} to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" style={{ textDecoration: 'none' }} to="/gallery">
                Gallery
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" style={{ textDecoration: 'none' }} to="/storage">
                Storage
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" style={{ color: 'white', textDecoration: 'none' }} to="/login">
                Login
              </Link>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Administration
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link style={{ color: 'black', textDecoration: 'none' }} to="/gallery/management">
                    Gallery Management
                  </Link>
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
        </Collapse>
      </Navbar>
    );
  }
}