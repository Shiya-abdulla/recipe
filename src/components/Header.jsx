import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary " >
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:"none", color:"black", fontSize:"30px" , textAlign:"center"}}>
              <h1 style={{textDecoration: "none"}}>
                <i className="fa-solid fa-utensils" style={{color: "#00060f"}} />{' '}
                CookBook
              </h1>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
