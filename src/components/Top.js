import React from 'react'
import '../App.css'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import logo from '../logo2.png';




export const Top = () => {
    return (
        <div>
            <Navbar className='top' bg="dark" expand="lg" fixed="top">
                <Container className='navbar'>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className='navitem' href="#home">Home</Nav.Link>
                            <Nav.Link className='navitem' href="#about">About me </Nav.Link>
                            <Nav.Link className='navitem' href="#link">Projects</Nav.Link>
                            <Nav.Link className='navitem' href="#link">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
