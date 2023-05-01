import React from 'react';

import Footer from '../pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Row } from 'react-bootstrap';
import RightSide from '../pages/Shared/RightSide/RightSide';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';


const NewsLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayouts;