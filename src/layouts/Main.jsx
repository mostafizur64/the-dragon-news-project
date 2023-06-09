import React from 'react';

import Footer from '../pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../pages/Shared/LeftSide/LeftSide';
import RightSide from '../pages/Shared/RightSide/RightSide';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
               
                <Row>
                    <Col lg={3}>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;