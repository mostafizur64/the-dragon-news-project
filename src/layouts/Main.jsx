import React from 'react';

import Footer from '../pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../pages/Shared/LeftSide/LeftSide';
import RightSide from '../pages/Shared/RightSide/RightSide';
import Header from '../pages/Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
               
                <Row>
                    <Col lg={3}>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg={6}>main contain is cooming...</Col>
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