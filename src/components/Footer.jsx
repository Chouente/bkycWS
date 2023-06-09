import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo.svg'
import '../styles/footer.css'
import {AiFillFacebook, AiFillTwitterSquare ,AiFillInstagram} from 'react-icons/ai'



const footer = () => {
    return (
        <div className='footer_part'>
            <Container>

                <Row>
                    <Col sm={6} md={4}>
                        <div className='description'>
                            <Row>
                                <Col md={6}>
                                    <div className='logo'>
                                        <img src={Logo} alt='logo'/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, temporibus labore magni quod  </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className='middle_part'>
                            <p><a href='#home'> HOME </a></p>
                            <p><a href='#product'> OUR MENU </a></p>
                            <p><a href='#contact'> CONTACT US </a></p>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className='right_part'>
                            <h6> follow us on social networks </h6>
                            <div className='icons_social'>
                                <a href='https://www.facebook.com/profile.php?id=100093612363179'> <AiFillFacebook size={40}/></a> 
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