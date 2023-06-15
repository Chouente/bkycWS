import React from 'react';
import { useTranslation} from "react-i18next";

import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo.svg'
import '../styles/footer.css'
import {AiFillFacebook, AiFillTwitterSquare ,AiFillInstagram} from 'react-icons/ai'



const Footer = () => {
    const { t } = useTranslation()

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
                            <p><a href='/'> {t('lien1')} </a></p>
                            <p><a href='/product'> {t('lien2')} </a></p>
                            <p><a href='/#contact'> {t('lien3')} </a></p>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className='right_part'>
                            <h6> {t('follo')} </h6>
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

export default Footer;