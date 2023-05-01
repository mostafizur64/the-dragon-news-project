import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';



const Header = () => {
  return (
    <Container>
      <div className='text-center'>
        <img src={logo} alt="" />
        <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className='d-flex  p-3'>
        <Button variant="danger">Latest</Button>
        <Marquee speed={100} className='text-danger' >
          <p>  I can be a React component, multiple React components, or just some text.......
            I can be a React component, multiple React components, or just some text.
          </p>

        </Marquee>
      </div>
     
    </Container>

  );
};

export default Header;