import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

const VerticalNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="flex-column" style={{ width: '250px' }}>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="./assest/images/logo.png"  // Make sure this path is correct
                    width="250"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/workout">Workout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default VerticalNavbar;

