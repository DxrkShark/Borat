import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Top() {
    return (
        <div >
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" >
            <Navbar.Brand href="#home">The Unofficial Borat Homepage 2</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">HOME</Nav.Link>
                <Nav.Link href="#pricing">ABOUT</Nav.Link>
                <NavDropdown title="BECOME A" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">NINJA</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">PSA</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">TOUR GUIDE</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Details</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Upcoming
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Top
