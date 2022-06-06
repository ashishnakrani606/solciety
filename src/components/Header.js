import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../assets/images/logo-main.svg';
import MenuIcon from '../assets/images/menu.svg';
import '../components/Header.scss';

function Header() {
  return (
    <div className='header'>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="https://thesolciety.gg">
                <img src={logo} alt='' />
                <span>Solciety</span>
              </Navbar.Brand>
              <div className='mobile-btn-set'>
                {/* <Button className='btn_sol mobile' >Connect <img src={buttonIcon} alt=""/></Button> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <img src={MenuIcon} alt='' />  
                </Navbar.Toggle>
              </div>
              <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="#the-story">Story</Nav.Link>
                  <Nav.Link href="#Features">Features</Nav.Link>
                  <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
                  <Nav.Link href="https://howrare.is/thesolciety" target="_blank">Rarity</Nav.Link>
                  <Nav.Link href="https://medium.com/@thesolcietyproject/the-solciety-genesis-collection-515ec6e6d693" target="_blank">Litepaper</Nav.Link>
                  <Nav.Link href="#Faq">FAQ </Nav.Link>
                  <Nav.Link href="https://thesolciety.gg/staking" className='highlighted-nav active'>Stake</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              {/* <Button className='btn_sol' >Connect <img src={buttonIcon} alt="asd"/></Button> */}
            </Container>
          </Navbar>
    </div>
  )
}

export default Header;