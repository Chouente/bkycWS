import React from 'react';
import {Col, Row} from 'react-bootstrap'
import '../styles/product.css'
import kossam from '../images/kossam.jpeg'

const Brevages = () => {
    return (
                    <div className='list'>
                        <Row>
                                <Col md={3} sm={12}>
                                    <a href='!#'>
                                        <div className='product'>
                                            <img src={kossam} alt='kossam'/>
                                            <h6> Kossam </h6>
                                        </div>
                                    </a>
                                </Col>
                                
                        </Row>
                    </div>
    );
};

export default Brevages;