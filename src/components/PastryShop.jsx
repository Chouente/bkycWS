import React from 'react';
import {Col, Row} from 'react-bootstrap'
import '../styles/product.css'
import croquette from '../images/croquetes.jpeg'
import gateau from '../images/gateau.jpeg'
import pili from '../images/pili.jpg'


const PastryShop = () => {
    return (
        <div className='product_list'>
                    <div className='list'>
                        <Row>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={croquette} alt='croquette'/>
                                            <h6> Croquette </h6>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={gateau} alt='gateau'/>
                                            <h6> Gateau </h6>
                                        </div>
                                    </a>
                                </Col>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={pili} alt='pili pili'/>
                                            <h6> Pili pili </h6>
                                        </div>
                                    </a>
                                </Col>
                        </Row>
                    </div>
                    
                </div>
    );
};

export default PastryShop;