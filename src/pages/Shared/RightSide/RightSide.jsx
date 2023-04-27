import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,  FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightSide = () => {
    return (
        <div className=''>
            <h2>Login with</h2>
            <Button className='mb-2' variant="outline-primary" ><FaGoogle />Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup className='ml-2' >
                    <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <img src={bg} alt="" />
            <div className='position-relative'> 
                <div className='position-absolute top-50 start-0 translate-middle'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, porro?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, porro?</p>
                </div>
            </div>
        </div>
    );
};

export default RightSide;