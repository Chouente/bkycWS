import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css'
import {AiFillFacebook, AiFillTwitterSquare ,AiFillInstagram} from 'react-icons/ai'



const footer = () => {
    return (
        <div className='footer_part'>
            <Container>

                <Row>
                    <Col sm={12} md={4}>

                    </Col>
                    <Col sm={12} md={4}>
                        <div className='middle_part'>
                            <div className=''><a href='!#'> HOME </a></div>
                            <div className=''><a href='!#'> OUR MENU </a></div>
                            <div className=''><a href='!#'> CONTACT US </a></div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='right_part'>
                            <h6> follow us on social networks </h6>
                            <div className='icons_social'>
                                <a href='!#'> <AiFillFacebook size={40}/></a> 
                                <a href='!#'> <AiFillTwitterSquare size={40}/> </a> 
                                <a href='!#'> <AiFillInstagram size={40}/> </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            
            </Container>
        </div>
    );
};

export default footer;